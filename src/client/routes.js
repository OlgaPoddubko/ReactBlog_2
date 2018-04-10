import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
//import AddArticlePage from './pages/AddArticlePage';
import ArticlePage from './pages/ArticlePage';

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
    path: '/blog/:articleId', //?
    component: ArticlePage,
  }/*,
  {
    path: '/blog/add',
    component: AddArticlePage,
  }
  *//*,
  {
    path: '/users',
    component: UsersPage,
  },*/
];
