/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const ScreenSizeDetector = require('screen-size-detector');

const screen = new ScreenSizeDetector();
let imageResolution;

if (screen.width > 800) {
  imageResolution = 'large/';
} else if (screen.width > 500) {
  imageResolution = 'medium/';
} else {
  imageResolution = 'small/';
}

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item pointer">
        <div class="card relative">
            <img class="card-img-top lazyload" data-src="${CONFIG.BASE_IMG_URL + imageResolution + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="card-body">
                <a href="${`/#/detail/${restaurant.id}`}" class="card-title">${restaurant.name}</a>
                <div class="card-text">${restaurant.description}</div>
            </div>
            <div class="star absolute">⭐️${restaurant.rating}</div>
            <div class="city absolute">${restaurant.city}</div>
        </div>
    </div>
    `;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-item detail pointer">
        <div class="card relative">
        <img class="card-img-top lazyload" data-src="${CONFIG.BASE_IMG_URL + imageResolution + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="card-body">
                <a href="#" class="card-title">${restaurant.name}</a>
                <div class="card-text">
                  <h4 class="card-subheading">Address</h4>
                  <p class="card-subtitle">${restaurant.address}, ${restaurant.city}</p>
                  <h4 class="card-subheading">Categories</h4>
                  <p class="card-subtitle">${restaurant.categories
    .map(
      (category) => `
                          <span>${category.name}</span>
                        `,
    )
    .join(', ')}
                  </p>
                  <h4 class="card-subheading">Foods</h4>
                  <p class="card-subtitle">${restaurant.menus.foods
    .map(
      (food) => `
                          <span>${food.name}</span>
                        `,
    )
    .join(', ')}
                  </p>
                  <h4 class="card-subheading">Drinks</h4>
                  <p class="card-subtitle">${restaurant.menus.drinks
    .map(
      (drink) => `
                          <span>${drink.name}</span>
                        `,
    )
    .join(', ')}
                  </p>
                  <h4 class="card-subheading">Reviews</h4>
                    <p class="card-subtitle review">${restaurant.customerReviews
    .map(
      (review) => `
                            <span>On ${review.date}, ${review.name === '' ? 'No Name' : review.name} comment "${review.review === '' ? 'No Review' : review.review}"</span>
                          `,
    ).join('<br>')}
                    </p>
                </div>
            </div>
            <div class="star absolute">⭐️${restaurant.rating}</div>
        </div>
    </div>
    `;

const createFavoriteRestaurantButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createFavoritedRestaurantButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createFavoritedRestaurantButtonTemplate,
};
