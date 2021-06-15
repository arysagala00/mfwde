import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="wrp-detail relative">
        <div id="restaurant" class="restaurant"></div>
        <div id="favoriteButtonContainer" class="absolute"></div>
      </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonPresenter.init({
      favButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        foods: restaurant.menus.foods,
        drinks: restaurant.menus.drinks,
        rating: restaurant.rating,
        reviews: restaurant.customerReviews,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
