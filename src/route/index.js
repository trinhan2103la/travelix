import Home from '../page/Home';
import About from '../page/About';
import Offer from '../page/Offer';
import New from '../page/New';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/offer', component: Offer },
  { path: '/new', component: New },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
