import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantsIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantsIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsIdb);
});
