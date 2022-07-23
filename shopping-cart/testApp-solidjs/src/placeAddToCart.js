import { render } from "solid-js/web";

import TestComp from "./TestComp.jsx";

export default function placeAddToCart(el) {
  render(() => <TestComp  />, el);
}
