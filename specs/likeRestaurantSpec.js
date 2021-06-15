import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createfavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createfavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restauran"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createfavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createfavoriteButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({id:1});
    // Simulasikan pengguna menekan tombol favorit restaurant
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    // tidak ada restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createfavoriteButtonPresenterWithRestaurant({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
