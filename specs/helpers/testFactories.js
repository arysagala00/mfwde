import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createfavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButtonPresenter.init({
        favButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createfavoriteButtonPresenterWithRestaurant };