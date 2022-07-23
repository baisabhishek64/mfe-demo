import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Product from './Product';

const App = () => (
  <div className="container">
    <Product {...{}} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
