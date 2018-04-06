import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import App from './app';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App name="Pavel" />
    </BrowserRouter>
  </Provider>
);
hydrate(app, document.getElementById('root'));
