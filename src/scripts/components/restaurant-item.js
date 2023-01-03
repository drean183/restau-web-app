import CONFIG from '../globals/config';
import getColor from '../services/colorService';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set restaurant(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
            :host {
                position: relative;
                background-color: #1C6758;
                border-radius: 20px;
                box-shadow: 3px 7px 16px -4px rgba(0,0,0,0.7);
                margin: 10%;
            }
            :host img{
                height: 300px;
                width: 100%;
                object-fit: cover;
            }
            .info {
                color: #EEF2E6;
                padding: 15px;
            }
            .city {
                position: absolute;
                top: 0;
                margin-top: 10px;
                padding: 10px;
                color: #1C6758;
                font-weight: bold;
                border-radius: 10px;
                background-color: #D6CDA4;
                box-shadow: -1px 7px 19px -4px rgba(0,0,0,0.7);
            }
            .rating {
                font-size: 20px;
                margin-bottom: 15px;
                font-weight: bold;
            }
            
            .rating .angka-rating {
                background-color: #3D8361;
                padding: 10px;
                border-radius: 10px;
                margin-left: 10px;
                box-shadow: 2px 9px 30px -9px rgba(0,0,0,0.64);
            }
            
            :host h3 a{
                color: #D6CDA4;
                text-decoration: none;
            }
            
            :host h3 {
                font-size: 25px;
                margin: 20px 0;
            }
            .desc {
                line-height: 25px;
                max-height: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4; /* number of lines to show */
                -webkit-box-orient: vertical;
            }
            .green {
                color: lightgreen;
            }
            .orange {
                color: orange;
            }
            .red {
                color: red;
            }
        </style>

            <img src="${CONFIG.BASE_IMG_URL}small/${this._item.pictureId}" alt="${this._item.name || '-'}">
            <div class="info">
                <p class="city">${this._item.city}</p>
                <div class="rating">Rating <span class="angka-rating ${getColor(this._item.rating)}">${this._item.rating}</span></div>
                <h3 class="restaurant__title"><a href="/#/detail/${this._item.id}">${this._item.name}</a></h3>
                <div class="desc"><p>${this._item.description || '-'}</p></div>
            </div>
        
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
