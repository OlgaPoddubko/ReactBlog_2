const mongoose = require('../index');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  id: String,
  author: String,
  title: String,
  text: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
