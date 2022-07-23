import React from 'react';

import { applySearch } from './state.js';

export default function Search(){

    const onChangeHandler = ({ target: { value }}) => {
        applySearch(value);
    }

    return(
        <div>
            <input type="text" onChange={onChangeHandler} placeholder="enter search text.." />
        </div>
    )
}