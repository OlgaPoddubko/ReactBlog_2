import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBlog } from '../modules/blog';
import Blog from '../components/Blog';

class BlogPage extends Component {
  static propTypes = {
    fetchBlog: PropTypes.func.isRequired,
    blog: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
  };
  static defaultProps = {
    blog: [],
    loading: false,
  };

  static fetchData(dispatch) {
      return dispatch(fetchBlog());
    }

  componentDidMount() {
    this.props.fetchBlog();
  }

  render() {
    const { blog, loading } = this.props;
    return (
      <div>
        <h2>BlogPage</h2>
        {loading ? <div>Loading...</div> : <Blog items={blog} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog.items,
  loading: state.blog.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBlog,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
