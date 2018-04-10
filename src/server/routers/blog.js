const express = require('express');
const router = express.Router();

const Article = require('../mongoose/models/article');

router.get('/', function(req, res, next) {
  Article.find(function (err, blog) {
    if (err) return next(err);
    res.send(blog);
  });
});

router.get('/:id', function(req, res, next) {
  Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.send(article);
    });
});

router.post('/add', function(req, res, next) {
  Article.create(req.body, function (err, article) {
     if (err) return next(err);
     res.send(article);
   });
});

router.put('/:id', function(req, res, next) {
  Article.findByIdAndUpdate(req.params.id, req.body, function (err, article) {
    if (err) return next(err);
    res.send(article);
  });
});

router.delete('/:id', function(req, res, next) {
  Article.findByIdAndRemove(req.params.id, req.body, function (err, article) {
    if (err) return next(err);
    res.send(article);
  });
});

module.exports = router;
