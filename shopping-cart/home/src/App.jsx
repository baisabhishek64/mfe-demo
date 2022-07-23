import React, {Suspense, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import SafeComponent from './SafeComponent';
import placeAddToCart from "testSolidJs/placeAddToCart";
import "./index.css";

import Products from './Products';

import { useLogin } from './state.js';

import Cart from 'cart/Cart';

const Login = React.lazy(() => import('auth/Login'));

const App = () => {

  const loggedIn = useLogin();

  const cart = useRef(null);

  useEffect(() => {
    if (cart.current) {
      placeAddToCart(cart.current);
    }
  }, [cart.current]);

  return (
    <div>
      <div style={{display: 'inline-flex'}}>
        <div style={{padding: 10}}>
          { !loggedIn && 
          <SafeComponent>
            <Suspense fallback={<div>Loading....</div>}>
              <Login />
            </Suspense>
          </SafeComponent>
          }
        </div>
        <div style={{padding: 10}}>
          <Products loggedIn={loggedIn} />
        </div>
        <div>
          <Cart loggedIn={loggedIn} />
        </div>
     </div>
     <div ref={cart}></div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
