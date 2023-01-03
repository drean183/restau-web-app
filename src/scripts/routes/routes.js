import Detail from '../views/pages/detail';
import ListRestaurant from '../views/pages/list-restaurant';
import Favorites from '../views/pages/favorite';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
  '/favorite': Favorites,
};

export default routes;
