import CONFIG from '../../globals/config';
import '../../components/restaurant-item';
import getColor from '../../services/colorService';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="content-header">${restaurant.name}</h2>
    <div class="restaurant-wrap">
        <img class="restaurant__poster" src="${CONFIG.BASE_IMG_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="restaurant__info">
            <h3 class="sub-header">Information</h3>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Address</h4>
            <p>${restaurant.address}</p>
            <h4>City</h4>
            <p>${restaurant.city}</p>
        </div>
    </div>
    <div class="restaurant__desc">
        <h3 class="sub-header">Description</h3>
        <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
      <img class="lazyload" data-src="${CONFIG.BASE_IMG_URL}small/${restaurant.pictureId}" alt="${restaurant.name || '-'}">
      <div class="info">
          <p class="city">${restaurant.city}</p>
          <div class="rating">Rating <span class="angka-rating ${getColor(restaurant.rating)}">${restaurant.rating}</span></div>
          <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
          <div class="desc"><p>${restaurant.description || '-'}</p></div>
      </div>
    </div>
`;

const createUserReviewItemTemplate = (review) => `
    <div class="review-item card">
        <h4 class="name">${review.name}</h4>
        <p class="review-text">${review.review}</p>
        <p class="date">${review.date}</p>
    </div>

`;

const createFoodItemTemplate = (food) => `
    <p class="food-item">&#9830; ${food.name}</p>
`;

const createDrinkItemTemplate = (drink) => `
    <p class="drink-item">&#9830; ${drink.name}</p>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoader = () => '<div class="loader"></div>';

export {
  createRestaurantDetailTemplate,
  createFoodItemTemplate,
  createDrinkItemTemplate,
  createUserReviewItemTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createLoader,
  createRestaurantItemTemplate
};
