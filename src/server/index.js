import express from 'express';
import bodyParser from 'body-parser';

const port = 8000;
const server = express();

const home = require('./routers/home');
const blog = require('./routers/blog');

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => {
	console.info(`Express listening on port ${port}`);
});

server.use('/blog', blog);
server.use('/', home);

server.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

server.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
