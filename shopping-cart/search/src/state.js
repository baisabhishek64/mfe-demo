
import { BehaviorSubject } from 'rxjs';

import { debounce } from 'lodash';

const products = new BehaviorSubject();

const API_SERVER = 'http://localhost:8080';

export const search = (search) =>
fetch(`${API_SERVER}/products/query?search=${search}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
})
  .then((res) => res.json())
  .then((data) => {
    products.next(data);
  });

  export const subscribeToProductsUpdate = (callback) => {
    console.log('product subscribed');
    products.subscribe(val => callback(val));
  }

  export const applySearch = debounce(function (text) {
    search(text)
    }, 1000);