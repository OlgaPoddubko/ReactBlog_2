import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArticleById } from '../modules/blog';

class ArticlePage extends Component {
  static propTypes = {
    fetchArticleById: PropTypes.func.isRequired,
    article: PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        articleId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    loading: PropTypes.bool,
  };
  static defaultProps = {
    article: null,
    loading: false,
  };

  static fetchData(dispatch, match) {
    return dispatch(fetchArticleById(match.params.articleId));
  }

  componentDidMount() {
    this.props.fetchArticleById(this.props.match.params.articleId);
  }

  render() {
    const { article, loading } = this.props;
    return (
      <div>
        <h2>ArticlePage</h2>
        {loading && !article ? <div>Loading...</div> : <pre>{JSON.stringify(article, null, 2)}</pre>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.blog.current,
  loading: state.blog.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticleById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
