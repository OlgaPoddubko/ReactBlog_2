import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
//import AddArticlePage from './pages/AddArticlePage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/blog',
    exact: true,
    component: BlogPage,
  },
  {
    path: '/blog/:articleId',
    component: ArticlePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  }/*,
  {
    path: '/blog/add',
    component: AddArticlePage,
  }
  */
];
