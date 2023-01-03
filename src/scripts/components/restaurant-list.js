import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }
            </style>
        `;
    this._restaurants.forEach((item) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = item;
      this.shadowRoot.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
