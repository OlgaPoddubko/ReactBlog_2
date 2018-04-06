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


/*former code

import React from 'react';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      auth: '',
      filt: '',
      filtQuery: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.handleFiltChange = this.handleFiltChange.bind(this);
    this.handleFiltQuerySubmit = this.handleFiltQuerySubmit.bind(this);

  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleAuthorChange(e) {
    this.setState({auth: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      author: this.state.auth
    };
    this.setState(prevState => ({items: prevState.items.concat(newItem), text: '', auth: ''}));
  }

  handleDelete(e) {
    console.log(e.target.id);
    e.stopPropagation();
    e.preventDefault();

    let currentItems = this.state.items;
    currentItems.splice(e.target.id, 1);
    this.setState({items: currentItems});

  }

  handleFiltChange(e) {
    this.setState({filt: e.target.value});
  }

  handleFiltQuerySubmit(e) {
    e.preventDefault();

    this.setState(prevState => ({filtQuery: prevState.filt}));
  }

  render() {
    return (
      <div>

        <h3>Have your favourite author? Find his posts here:</h3>
        <div className="filter">
          <form onSubmit={this.handleFiltQuerySubmit}>
            <button type="submit" className="filter-button">find</button>
            <input type="text" onChange={this.handleFiltChange} value={this.state.filt} placeholder="find by author" className="filter-input" />
          </form>
        </div>

        <h3>View posts:</h3>
        <table className="blog" cellpadding="10" rules="all">
          <thead>
            <tr>
              <th className="th-author" align="left">author</th>
              <th className="th-text" align="left">text</th>
              <th className="th-delete" align="left"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.filter((item) => {
              if (!this.state.filtQuery)
                return true;
              let regexp = new RegExp(this.state.filtQuery, 'i');
              return item.author.match(regexp);
            }).map((post, index) => {
              return <tr key={index}>
                <td>{post.author}</td>
                <td>{post.text}</td>
                <td className="delete-td">
                  <button className="delete-button" id={index} onClick={this.handleDelete}>delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>

        <div className="add">
          <h3>Please add post here:</h3>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.auth} onChange={this.handleAuthorChange} placeholder="author" required type="text" className="author-input" />
            <textarea value={this.state.text} onChange={this.handleTextChange} className="text-input" placeholder="text" maxLength="800" rows="3" />
            <button className="add-button">add post</button>
            <div className="clear" tupe="submit"></div>
          </form>
        </div>

        <style jsx>{`
          h3{
            margin-bottom: 7px;
          }

          .filter, .blog{
            margin-bottom: 30px;
          }

          .filter-input{
            width: 880px;
          }

          .author-input, .text-input{
            width: 978px;
            margin-bottom: 5px;
          }

          .filter-input, .author-input, .text-input{
            padding: 0 10px;
            height: 50px;
            border: none;
            background: #e9e9e9;
          }

          .text-input{
            padding-top: 15px;
          }
          .filter-button{
            background: #f9f342;
          }

          .delete-button{
            background: #f94269;
          }

          .add-button{
          background: #49c757;
          }

          .filter-button:hover{
            background: #f5ef41;
          }

          .delete-button:hover{
            background: #ef3f65;
          }

          .add-button:hover{
          background: #42b34e;
          }

          button:hover{
            cursor: pointer;
          }

          .filter-button, .delete-button, .add-button{
            width: 100px;
            height: 50px;
            border: none;
            float: right;
          }

          .delete-button, .add-button{
            color: #fff;
          }

          .blog{
            border: 1px solid #e9e9e9;
            font-size: 14px;
          }

          .th-author{
            width: 250px;
            height: 30px;
          }

          .th-text{
            width: 650px;
          }

          .th-delete{
            width: 100px;
            padding: 0;
          }

          td.delete-td{
            padding: 0;
          }

          td, th{
            padding: 10px;
          }

          .clear{
            clear: both;
          }
        `}
          </style>

      </div>
    );
  }
}

export default BlogPage;

*/
