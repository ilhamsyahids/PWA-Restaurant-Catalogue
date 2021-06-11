import CONFIG from '../../globals/config';
import {
  createRestaurantCategoriesTemplate,
  createRestaurantMenusTemplate,
} from './template-restaurant-detail';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
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
  <h4>Foods</h4>
  <div class="restaurant__menus">
    <p>${createRestaurantMenusTemplate(restaurant.menus.foods)}</p>
  </div>
  <h4>Drinks</h4>
  <div class="restaurant__menus">
    <p>${createRestaurantMenusTemplate(restaurant.menus.drinks)}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
