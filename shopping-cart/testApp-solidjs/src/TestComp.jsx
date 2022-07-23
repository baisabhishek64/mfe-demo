import { createEffect, createSignal, Show } from "solid-js";

export default () => {

  return (
    <Show when={true}>
      <div>
        <p>Feedback form</p>
        <div>
          <textarea placeholder="Enter your feedback"></textarea>
        </div>
        <div>
          <button type="button">Submit feedback</button>
        </div>
      </div>
    </Show>
  );
};
