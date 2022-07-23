import React, {useState, useCallback} from 'react';
import { login } from './state.js';

import './login.css';

export default function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const loginCallback = useCallback((event) => {
        event.preventDefault();
        if (!username || !password) {
            alert('enter username and password');
            return;
        }
        login(username, password);
    }, [login, username, password]);

    return (
        <div className="testClass" style={{padding: 20}}>
            <h3>Please Login</h3>
            <div style={{padding: 10}}>
                <span>Username </span> &nbsp;
                <input type="text" placeholder="username" onChange={( { target: { value }}) => setUsername(value) } />
            </div>
            <div style={{padding: 10}}>
                <span>Password</span> &nbsp;
                <input type="password" onChange={( { target: { value }}) => setPassword(value) } />
            </div>
            <div style={{padding: 10}}>
                <button type="button" onClick={loginCallback}>Login</button>
            </div>
        </div>
    )
}