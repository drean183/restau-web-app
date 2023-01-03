import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import '../../components/restaurant-list';
import { createLoader, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section class="content-header">
        <h2>Favorite Restaurant</h2>
      </section>
      <div id="query" class="content"></div>
      <div class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    const restaurantsContainer = document.querySelector('.restaurant-list');
    
    content.innerHTML = createLoader();
    restaurantsContainer.innerHTML = createLoader();
    
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurant();
    
    content.innerHTML = '';
    restaurantsContainer.innerHTML = '';

    if(restaurants.length < 1) {
      content.innerHTML += `
        <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
      `
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },

};

export default Favorites;
