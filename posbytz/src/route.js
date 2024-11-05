// src/routes.js
import AboutUs from './pages/AboutUs';
import AccessPage from './pages/Access';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Support from './pages/Support';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/About-us',
    component: AboutUs,
    exact: true
  },
  {
    path: '/Contact-us',
    component: ContactUs,
    exact: true
  },
  {
    path: '/Support',
    component: Support,
    exact: true
  },
  {
    path: '/Login',
    component: AccessPage,
    exact: true
  }
  , {
    path: '/Register',
    component: AccessPage,
    exact: true
  },
  {
    path: '/Career',
    component: Careers,
    exact: true
  }
];

export default routes;
