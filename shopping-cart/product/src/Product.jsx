import React from 'react';

import AddToCart from 'cart/AddToCart';
import RemoveFromCart from 'cart/RemoveFromCart';

export default function Product({name, deliveryDate, sellerAddress, price, image, id, loggedIn}) { 
    return (
        <div class="container" style={{fontSize: 15}}>
            <div>
                <div>{name}</div>
                <div>Delivered by : {deliveryDate}</div>
                <div>Seller Address : {sellerAddress}</div>
                <div>Price : {price}</div>
                <div><img src={image} ></img></div>
                {loggedIn && <div><AddToCart id={id}  /> <RemoveFromCart id={id} /></div>}
            </div>
        </div>
    );
}