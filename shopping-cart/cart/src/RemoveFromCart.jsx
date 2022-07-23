import React from 'react';

import { removeFromCart } from './state.js';

export default function RemoveFromCart({id}) {
    return(
        <button type="button" onClick={() => removeFromCart(id)}>Remove</button>
    )
}