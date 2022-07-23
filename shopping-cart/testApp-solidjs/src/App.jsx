import { render } from "solid-js/web";

import "./index.scss";

import TestComp from './TestComp';

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <TestComp />
  </div>
);
render(App, document.getElementById("app"));
