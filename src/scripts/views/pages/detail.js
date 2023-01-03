/* eslint-disable no-alert */
import RestaurantDataSource from '../../data/resto-source';
import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import {
  createFoodItemTemplate,
  createRestaurantDetailTemplate,
  createDrinkItemTemplate,
  createUserReviewItemTemplate,
  createLoader,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
              <div id="restaurant" class="restaurant page"></div>
              <div id="likeButtonContainer"></div>
              <div class="menu page" id="menu">
                  <div class="content-header">
                      <h3>Menu</h3>
                  </div>
                  <div class="menu-item-wrap">
                      <div class="makanan card" id="makanan">
                          <h4>Makanan</h4>
                      </div>
                      <div class="minuman card" id="minuman">
                          <h4>Minuman</h4>
                      </div>
                  </div>
              </div>
              <div class="review page">
                <h3 class="content-header">User Review</h3>

                <div class="review-wrap">
                  <div class="review-box">
                  </div>

                  <div class="review-form">
                    <h3 class="content-header">Create Review</h3>
                    <form class="form">
                      <div class="label-input">
                        <label>Nama</label>
                        <input type="text" for="nama" class="inputNama">
                      </div>
                      <div class="label-input">
                        <label>Review</label>
                        <input type="text" for="review" class="inputReview">
                      </div>
                      <button type="submit" class="review-btn">Send Review</button>
                    </form>
                  </div>
                </div>
              </div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const makananContainer = document.querySelector('#makanan');
    const minumanContainer = document.querySelector('#minuman');
    const reviewContainer = document.querySelector('.review-box');

    restaurantContainer.innerHTML = createLoader();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantsIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
      },
    });

    // tampilkan detail restoran

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // tampilkan setiap makanan
    restaurant.menus.foods.forEach((food) => {
      makananContainer.innerHTML += createFoodItemTemplate(food);
    });

    // tampilkan setiap minuman
    restaurant.menus.drinks.forEach((drink) => {
      minumanContainer.innerHTML += createDrinkItemTemplate(drink);
    });

    // tampilkan setiap review
    restaurant.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createUserReviewItemTemplate(review);
    });

    // add review
    const sendReviewBtn = document.querySelector('.review-btn');
    const inputNama = document.querySelector('.inputNama');
    const inputReview = document.querySelector('.inputReview');

    sendReviewBtn.addEventListener('click', async (event) => {
      const customerReview = {
        id: url.id,
        name: inputNama.value,
        review: inputReview.value,
      };
      if (inputNama.value === '' || inputReview.value === '') {
        alert('Please input your name and review');
      } else {
        event.preventDefault();
        RestaurantDataSource.newReview(customerReview)
        alert('Thank you, Your review is recorded');
      }
    });
  },

};

export default Detail;
