import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
        <div class="restaurant-list-wrapper">
            <h2 class="restaurant-list-heading">Restaurants List</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantsList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
