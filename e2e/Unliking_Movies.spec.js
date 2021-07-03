
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  // Like one restaurant based on e2e linking restaurant
  const firstRestaurant = locate('.restaurant__name a').first();
  // const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant__name a');

  const firstRestaurantInFav = locate('.restaurant__name a').first();
  I.click(firstRestaurantInFav);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
