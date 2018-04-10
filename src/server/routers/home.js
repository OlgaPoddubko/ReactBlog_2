import React from 'react';
import { renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import express from 'express';
const router = express.Router();

import routes from '../../client/routes';
import configureStore from '../../client/configureStore';
import App from '../../client/app';

function renderFullPage(html, preloadedState) {
	return `
		<!doctype html>
		<html>
			<head>
				<meta charset=utf-8>
				<title>React SSR</title>
			</head>
			<body>
				<div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
					<script src="/js/bundle.js"></script>
			</body>
		</html>
	`;
}

router.get('/*', function(req, res, next) {
  const store = configureStore();

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
    const { fetchData } = route.component;

    if (!(fetchData instanceof Function)) {
      return Promise.resolve(null);
    }

    return fetchData(store.dispatch, match);
  });

  return Promise.all(promises)
    .then(() => {
      const context = {};
      const app = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context} >
            <App name="Pavel" />
          </StaticRouter>
        </Provider>
      );

      const html = renderToString(app);

      if (context.url) {
				// что здесь происходит?
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();
			console.log(preloadedState);//

      return res.send(renderFullPage(html, preloadedState));
    });
});

module.exports = router;
