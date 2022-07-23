import React, {useState, useEffect} from 'react';
import { BehaviorSubject } from 'rxjs';

const cart = new BehaviorSubject();

const API_SERVER = 'http://localhost:8080';

export const addToCart = (id) =>
  fetch(`${API_SERVER}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  })
    .then(() => {
      console.log('id passed was', id);
        fetchCart();
    });

export const removeFromCart = (id) =>
  fetch(`${API_SERVER}/cart/remove`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  })
    .then(() => {
      console.log('id passed was', id);
        fetchCart();
    });

export const fetchCart = () =>
        fetch(`${API_SERVER}/cart/get`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
        cart.next(data);
    });

export const useCart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        cart.subscribe(val => setData(val));
    }, []);

    return data;
}