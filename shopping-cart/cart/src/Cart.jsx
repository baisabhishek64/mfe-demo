import React , {useEffect} from 'react';

import { useCart, fetchCart } from './state';

export default function Cart({ loggedIn }) {

    const cartData = useCart();

    useEffect(() => {
        fetchCart();
    }, []);

    if (!loggedIn) return null;

    const mappedCartData = cartData && cartData.map(item => <div > Product Info {item.name} : {item.price}</div>)

    return(
        <div style={{marginTop: 100}}>
            <h3>Items in cart</h3>
            {mappedCartData}
        </div>
    )
}