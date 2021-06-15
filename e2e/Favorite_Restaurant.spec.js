/* eslint-disable no-unused-vars */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const initialCondition = "You don't have favorite restaurant in the list";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see(initialCondition, '.restaurant-favorite-not-found');
});

Scenario('favoriting a restaurant', async ({ I }) => {
  I.see(initialCondition, '.restaurant-favorite-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .card-title');
  const initialCard = locate('.card-title').first();
  const initialCardTitle = await I.grabTextFrom(initialCard);
  I.click(initialCard);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item .card-title');
  const favoritedCardTitle = await I.grabTextFrom('.restaurant-item .card-title');

  assert.strictEqual(initialCardTitle, favoritedCardTitle);
});

Scenario('unfavoriting a restaurant', async ({ I }) => {
  I.see(initialCondition, '.restaurant-favorite-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .card-title');
  const initialCard = locate('.card-title').first();
  const initialCardTitle = await I.grabTextFrom(initialCard);
  I.click(initialCard);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item .card-title');
  const favoritedCardTitle = await I.grabTextFrom('.restaurant-item .card-title');

  assert.strictEqual(initialCardTitle, favoritedCardTitle);

  I.click(favoritedCardTitle);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-favorite-not-found');
  const notHaveFavoritedRestaurnat = await I.grabTextFrom('.restaurant-favorite-not-found');

  assert.strictEqual(notHaveFavoritedRestaurnat, initialCondition);
});
