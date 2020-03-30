import React from "react";
import { Trash, Clock, ShoppingCart, Search, Download, X } from "react-feather";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import IconButtons from "./components/IconButtons/IconButtons";

function App() {
  return (
    <header>
      <div className="buttonsHeaderWrapper">
        <h1>Buttons</h1>
        <h2>Contained buttons</h2>
        <p>
          Custom button styles for actions in forms, dialogs, and more with
          support for multiple sizes, states, and more.
        </p>
        <h3>Examples</h3>
        <p>
          Use any of the available button style types to quickly create a styled
          button. Just modify the variant prop.
        </p>

        <div className="buttonsContainer">
          <Buttons color="primary">Primary</Buttons>
          <Buttons color="secondary">Secondary</Buttons>
          <Buttons color="success">Success</Buttons>
          <Buttons color="warning">Warning</Buttons>
          <Buttons color="danger">Danger</Buttons>
          <Buttons color="linkButton" isLink hrefLink="/">
            Link
          </Buttons>
          <Buttons color="disabled" disabled={true}>
            Disabled
          </Buttons>
        </div>
        <pre className="codeBox">
          <code>
            {`import {Button} from "@hygge-ui/components/Button;

    <Button color="primary">Primary</Button>

    <Button color="secondary">Secondary</Button>

    <Button color="success">Success</Button>

    <Button color="warning">Warning</Button>

    <Button color="danger">Danger</Button>

    <Buttons color="linkButton" isLink hrefLink="/">
            Link
    </Buttons>

    <Buttons color="disabled" disabled={true}>
            Disabled
    </Buttons>
              `}
          </code>
        </pre>
      </div>

      <div className="buttonsHeaderWrapper">
        <h2>Icon buttons</h2>
        <p>
          Icon buttons are commonly found in app bars and toolbars. Icons are
          also appropriate for toggle buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
        </p>
        <div className="buttonsContainer">
          <IconButtons color="secondary">
            <X />
          </IconButtons>
          <IconButtons color="danger">
            <Trash />
          </IconButtons>
          <IconButtons color="secondary">
            <Clock />
          </IconButtons>
          <IconButtons color="success">
            <ShoppingCart />
          </IconButtons>
          <IconButtons color="primary">
            <Search />
          </IconButtons>
          <IconButtons color="success">
            <Download />
          </IconButtons>
          <IconButtons color="disabled" disabled={true}>
            <Trash />
          </IconButtons>
        </div>
        <pre className="codeBox">
          <code>
            {`import {Button} from "@hygge-ui/components/Button;

    <IconButtons color="secondary">
            <X />
    </IconButtons>

    <IconButtons color="danger">
            <Trash />
    </IconButtons>

    <IconButtons color="secondary">
            <Clock />
    </IconButtons>

    <IconButtons color="success">
            <ShoppingCart />
    </IconButtons>

    <IconButtons color="primary">
            <Search />
    </IconButtons>

    <IconButtons color="success">
            <Download />
    </IconButtons>

    <IconButtons color="disabled" disabled={true}>
            <Trash />
    </IconButtons>
              `}
          </code>
        </pre>
        <div className="buttonsHeaderWrapper">
          <h2>Size buttons</h2>
          <p>
            Fancy larger or smaller buttons? Use the <code>size</code> property.
          </p>
          <div className="buttonsContainer">
            <div className="primaryBtnContainer">
              <Buttons size="small" color="primary">
                Small
              </Buttons>
              <Buttons size="medium" color="primary">
                Medium
              </Buttons>
              <Buttons size="large" color="primary">
                Large
              </Buttons>
            </div>
            <div className="secondaryBtnContainer">
              <Buttons size="small" color="secondary">
                Small
              </Buttons>
              <Buttons size="medium" color="secondary">
                Medium
              </Buttons>
              <Buttons size="large" color="secondary">
                Large
              </Buttons>
            </div>
            <div className="closeIconBtnContainer">
              <IconButtons size="small" color="secondary">
                <X />
              </IconButtons>
              <IconButtons size="medium" color="secondary">
                <X />
              </IconButtons>
              <IconButtons size="large" color="secondary">
                <X />
              </IconButtons>
            </div>
            <div className="deleteIconBtnContainer">
              <IconButtons size="small" color="danger">
                <Trash />
              </IconButtons>
              <IconButtons size="medium" color="danger">
                <Trash />
              </IconButtons>
              <IconButtons size="large" color="danger">
                <Trash />
              </IconButtons>
            </div>
          </div>
          <pre className="codeBox">
            <code>
              {`import {Button} from "@hygge-ui/components/Button;

   <Buttons size="small" color="primary">
              Small
    </Buttons>

    <Buttons size="medium" color="primary">
              Medium
    </Buttons>

    <Buttons size="large" color="primary">
              Large
    </Buttons>
              `}
            </code>
          </pre>
        </div>
      </div>
    </header>
  );
}

export default App;
