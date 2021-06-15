import Detail from '../views/pages/detail';
import ListRestaurants from '../views/pages/list';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurants, // default page
  '/list-restaurants': ListRestaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
