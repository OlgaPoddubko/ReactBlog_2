const User = require('../mongoose/models/user');
const passport = require('../passport');

module.exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    return err
      ? next(err)
      : user
        ? req.logIn(user, function(err) {
            if (err) {
              return next(err);
            }
            return res.send(user);
          })
        : res.send({ error: info.message });
  })(req, res, next);
};

module.exports.logout = function(req, res) {
  req.logout();
  res.end();
};

module.exports.register = function(req, res, next) {
  var user = new User({
    username: req.body.email,
    password: req.body.password,
  });
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
          return err ? next(err) : res.send(user);
        });
  });
};
