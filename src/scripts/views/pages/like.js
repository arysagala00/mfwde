import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="restaurant-list-wrapper">
            <h2 class="restaurant-list-heading">Favorite List</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <p class="restaurant-favorite-not-found">You don't have favorite restaurant in the list</p>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Like;
