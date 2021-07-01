import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import CONFIG from '../../globals/config';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
  createRestaurantReviewsTemplate,
} from './template-restaurant-detail';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" width="400" height="200" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    ${createRestaurantCategoriesTemplate(restaurant.categories)}
    <h4>Address</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Menus</h3>
  </div>
  <div>
    <h4>Foods</h4>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.foods)}</p>
    </div>
  </div>
  <div>
    <h4>Drinks</h4>
    <div class="restaurant__menus">
      <p>${createRestaurantMenusTemplate(restaurant.menus.drinks)}</p>
    </div>
  </div>
  <div class="restaurant__overview">
    <h3>Reviews</h3>
  </div>
  <div>
    ${createRestaurantReviewsTemplate(restaurant.customerReviews)}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}" width="400" height="200"
          data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__city">
            <p>${restaurant.city}</p>
        </div>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="restaurant-item__content">
          <h3 class="restaurant__name skeleton"></a></h3>
          <p class="skeleton"></p>
        </div>
      </div>`;
  }
  return template;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestaurantTemplate,
};
