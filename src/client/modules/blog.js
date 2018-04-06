// Actions
const LOAD_BLOG = 'blog/LOAD_BLOG';
const UPDATE_BLOG = 'blog/UPDATE_BLOG';
const UPDATE_CURRENT_ARTICLE = 'blog/UPDATE_CURRENT_ARTICLE';

// Action Creators
export const loadBlog = () => ({
  type: LOAD_BLOG,
});

export const updateBlog = blog => ({
  type: UPDATE_BLOG,
  payload: blog,
});

export const updateCurrentArticle = article => ({
  type: UPDATE_CURRENT_ARTICLE,
  payload: article,
});

export const fetchBlog = () => (dispatch) => {
  dispatch(loadBlog());

//  return fetch('http://jsonplaceholder.typicode.com/users')//
return fetch('http://localhost:8000/blog')
    .then(res => res.json())
    .then(blog => dispatch(updateBlog(blog)));
};

export const fetchArticleById = articleId => (dispatch) => {
  dispatch(loadBlog());
  //return fetch(`http://jsonplaceholder.typicode.com/users/${articleId}`)//
  return fetch(`http://localhost:8000/blog/${articleId}`)
    .then(res => res.json())
    .then(blog => dispatch(updateCurrentArticle(blog)));// ??
};

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

// Reducer
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        loading: true,
        current: null,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_ARTICLE:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};