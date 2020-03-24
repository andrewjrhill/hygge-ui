import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <header>
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
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="link" isLink hrefLink="/">
            Link
          </Button>
          <Button color="disabled" disabled={true}>
            Disabled
          </Button>
        </div>
        <pre className="code_box">
          <code>
            {`import {Button} from "@hygge-ui/components/Button;

    <Button color="primary">Primary</Button>

    <Button color="secondary">Secondary</Button>

    <Button color="success">Success</Button>

    <Button color="warning">Warning</Button>

    <Button color="danger">Danger</Button>

    <a href="#buttons" color="primary">
            <button className="link">Link</button>
    </a>

    <Button color="disabled" disabled>
            Disabled
    </Button>
              `}
          </code>
        </pre>
      </div>
    </header>
  );
}

export default App;
