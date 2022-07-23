import React, {useState, useEffect} from 'react';

import { search, subscribeToProductsUpdate } from 'search/state';
import Product from 'product/Product';


import Search from 'search/Search';

export default function Products({loggedIn}){

    const [products, setProducts] = useState([]);
    const productsMap = (products && products.length > 0) ? products.map(p => <Product loggedIn={loggedIn} {...p} id={p._id} />) : products;

    useEffect(() => {
        search('');
        subscribeToProductsUpdate((val) => {
            console.log('setting this value', val);
            setProducts(val);
        });
    }, []);

    return (
        <div >
            <div>
                <Search />
            </div>
            <div style={{ marginTop: 50}}>
                {productsMap}
            </div>
        </div>
    )
}