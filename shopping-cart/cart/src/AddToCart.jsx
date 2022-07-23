import React from 'react';

import { addToCart } from './state.js';

export default function AddToCart({id}) {
    return(
        <button type="button" onClick={() => addToCart(id)}>Add</button>
    )
}