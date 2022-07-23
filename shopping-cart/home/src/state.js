import React, {useState, useEffect} from 'react';

import { subscribeToTokenUpdate } from 'auth/state';

export function useLogin() {
    const [loggednIn, setLoggedIn] = useState(false);

    useEffect(() => {
        subscribeToTokenUpdate(setLoggedIn);
    }, []);

    return loggednIn;

}