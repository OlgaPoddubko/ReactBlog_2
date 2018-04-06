const express = require('express');
const router = express.Router();

const Article = require('../mongoose/models/article');

router.get('/', function(req, res, next) {
  Article.find({}, function(err, blog) {
    res.send(blog);
  });
});

router.post('/add', function(req, res, next) {
  const article = new Article({
    id: req.body.id,
    author: req.body.author,
    title: req.body.title,
    text: req.body.text
  });
  article.save(function(err) { // r
    if (err) return next(err);
    res.send('added a new article');
  });
});

router.get('/:id', function(req, res, next) {
  Article.find({ id: req.params._id }, function(err, blog) {
    if (!blog.length) {
      return next(err);
    }
    res.render('article', { blog });
  });
});

router.post('/:id', function(req, res, next) {
  if (req.body._method === 'put') {
    Article.update(
      { id: req.params.id },
      { title: req.body.title, text: req.body.text },
      function(err, raw) {
        if (err) return next(err);
        res.send('an article have been updated');
      },
    );
  } else if (req.body._method === 'delete') {
    Article.find({ id: req.params.id }).remove(function(err) {// r
      if (err) return next(err);
      res.send('an article have been deleted');
    });
  }
});

module.exports = router;
