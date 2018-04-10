import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ item }) => (
  <div className="article" key={item.id}>
    <Link to={`/blog/${item._id}`}>{item.title}</Link> {/*нужен не item.id, а item._id*/}
    <p>{item.text}</p>
    <h6>{item.author}</h6>
  </div>
);

Article.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
