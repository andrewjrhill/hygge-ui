import React from "react";
import "./Button.css";

export default function ContainedButtons() {
  return (
    <header className="button_header">
      <h1>Buttons</h1>
      <p>
        Custom button styles for actions in forms, dialogs, and more with
        support for multiple sizes, states, and more.
      </p>
      <h2>Examples</h2>
      <p>
        Use any of the available button style types to quickly create a styled
        button. Just modify the variant prop.
      </p>
      <>
        <button className="button_design" variant="primary">
          Primary
        </button>
      </>
      <div className="code_box">
        <pre>
          <code>
            {`import {Button} from "@hygge-ui/components/Button;

<button className="button_design" variant="primary">
    Primary
</button>
              `}
          </code>
        </pre>
      </div>
    </header>
  );
}
