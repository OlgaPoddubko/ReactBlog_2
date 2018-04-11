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
  return fetch('http://localhost:8000/blog')
    .then(res => res.json())
    .then(blog => dispatch(updateBlog(blog)));
};

export const fetchArticleById = articleId => (dispatch) => {
  dispatch(loadBlog());
  return fetch(`http://localhost:8000/blog/${articleId}`)
    .then(res => res.json())
    .then(article => dispatch(updateCurrentArticle(article)));
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

// login and logout
export const logIn = login => ({
  type: 'LOG_IN',
  login,
});

export const logOut = logout => ({
  type: 'LOG_OUT',
  logout,
});

export const handleLogin = (formData, history) => dispatch => {
  fetch(`http://localhost:8000/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) {
        return console.error(data.error);
      }
      dispatch(logIn(true));
      return history.push('/');
    })
    .catch(error => console.error(error));
};

export const handleLogout = history => dispatch => {
  fetch(`http://localhost:8000/logout`, { method: 'GET', credentials: 'same-origin' }).then(
    () => {
      dispatch(logOut(true));
      return history.push('/');
    },
  );
};

//registration
export const signUp = signup => ({
  type: 'SIGN_UP',
  signup,
});

export const handleSignup = (formData, history) => dispatch => {
  fetch(`http://localhost:8000/signup`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) {
        return console.error(data.error);
      }
      dispatch(signUp(true));
      return history.push('/');
    })
    .catch(error => console.error(error));
};
