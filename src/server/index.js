import express from 'express';
import bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./passport');

const port = 8000;
const server = express();

const home = require('./routers/home');
const blog = require('./routers/blog');

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
  }),
);

server.use(passport.initialize());
server.use(passport.session());

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
	res.send('error');
});
