import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const Blog = ({ items }) => (
  <div className="blog">
    {items.map(item => (
      <Article item={item} key={item.id} />
    ))}
  </div>
);

Blog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

Blog.defaultProps = {
  items: [],
};

export default Blog;
