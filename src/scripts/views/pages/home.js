import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
          ${createSkeletonRestaurantTemplate(20)}
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.getRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
