import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async newReview(review) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };
    await fetch(API_ENDPOINT.REVIEW, option);
  }
}

export default RestaurantDataSource;
