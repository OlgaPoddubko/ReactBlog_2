import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ item }) => (
  <div className="article" key={item.id}>
    <Link to={`/blog/${item.id}`}>{item.name}</Link>
  </div>
);

Article.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
