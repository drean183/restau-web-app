import RestaurantDataSource from '../../data/resto-source';
import '../../components/restaurant-list';
import { createLoader, createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <section class="content-header">
        <h2>Explore Restaurant</h2>
      </section>
      <div id="query" class="content"></div>
      <div class="restaurant-list"></div>
      `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    const restaurantContainer = document.querySelector('.restaurant-list');
    
    content.innerHTML = createLoader();
    restaurantContainer.innerHTML = createLoader();
    
    const restaurants = await RestaurantDataSource.listRestaurant();

    content.innerHTML = '';
    restaurantContainer.innerHTML = '';

    if(restaurants.length < 1) {
      content.innerHTML += `
        <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
      `
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default ListRestaurant;
