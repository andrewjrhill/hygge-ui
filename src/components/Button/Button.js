import React from "react";
import "./Button.css";

const Button = props => {
  const { disabled, secondary, success, warning, danger, link } = props;

  return (
    <header className="button_header">
      <div className="button_header_wrapper">
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
        <div className="buttons_container">
          <button>Primary</button>

          <button secondary="secondary">
            Secondary
            {secondary}
          </button>

          <button success="success">
            Success
            {success}
          </button>

          <button warning="warning">
            Warning
            {warning}
          </button>

          <button danger="danger">
            Danger
            {danger}
          </button>

          <button onclick link="link">
            Link
            {link}
          </button>

          <button disabled="disabled">
            Disabled
            {disabled}
          </button>
        </div>
        <pre className="code_box">
          <code>
            {`import {Button} from "@hygge-ui/components/Button;

  <button>
    Primary
  </button>

  <button secondary="secondary">
    Secondary
  </button>

  <button success="success">
    Success
  </button>

  <button warning="warning">
    Warning
  </button>

  <button danger="danger">
    Danger
  </button>

  <button link="link">
    Link
  </button>

  <button disabled="disabled">
    Disabled
  </button>
              `}
          </code>
        </pre>
      </div>
    </header>
  );
};

export default Button;
