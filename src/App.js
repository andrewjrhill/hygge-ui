import React from "react";
import {
  Trash,
  Clock,
  ShoppingCart,
  Search,
  Download,
  X,
  Send,
  Upload,
  MicOff,
  Mic,
  Save
} from "react-feather";
import "./App.css";
import Button from "./components/Button/Button";
import Code from "./components/Code/Code";
import IconButton from "./components/IconButton/IconButton";
import Text from "./components/Text/Text";
import { ButtonExamples } from "./components/Button/Button.examples";
import { IconButtonExamples } from "./components/IconButton/IconButton.examples";
import { IconLabelBtnExamples } from "./components/Button/IconLabelBtn.examples";
import { SizeButtonExamples } from "./components/Button/SizeButton.examples";
import { TextButtonExamples } from "./components/Button/TextButton.examples";

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
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="linkButton" isLink hrefLink="/">
            Link
          </Button>
          <Button color="disabled" disabled={true}>
            Disabled
          </Button>
        </div>
        <Code language="javascript" codeString={ButtonExamples}></Code>
      </div>

      <div className="buttonsHeaderWrapper">
        <h2>Icon buttons</h2>
        <p>
          Icon buttons are commonly found in app bars and toolbars. Icons are
          also appropriate for toggle buttons that allow a single choice to be
          selected or deselected, such as adding or removing a star to an item.
        </p>
        <div className="buttonsContainer">
          <IconButton color="secondary">
            <X />
          </IconButton>
          <IconButton color="danger">
            <Trash />
          </IconButton>
          <IconButton color="secondary">
            <Clock />
          </IconButton>
          <IconButton color="success">
            <ShoppingCart />
          </IconButton>
          <IconButton color="primary">
            <Search />
          </IconButton>
          <IconButton color="success">
            <Download />
          </IconButton>
          <IconButton color="disabled" disabled={true}>
            <Trash />
          </IconButton>
          <IconButton color="primary">
            <Upload />
          </IconButton>
        </div>
        <Code language="javascript" codeString={IconButtonExamples}></Code>
        <div className="buttonsHeaderWrapper">
          <h2>Size buttons</h2>
          <p>
            Fancy larger or smaller buttons? Use the <code>size</code> property.
          </p>
          <div className="buttonsContainer">
            <div className="primaryBtnContainer">
              <Button size="small" color="primary">
                Small
              </Button>
              <Button size="medium" color="primary">
                Medium
              </Button>
              <Button size="large" color="primary">
                Large
              </Button>
            </div>
            <div className="secondaryBtnContainer">
              <Button size="small" color="secondary">
                Small
              </Button>
              <Button size="medium" color="secondary">
                Medium
              </Button>
              <Button size="large" color="secondary">
                Large
              </Button>
            </div>
            <div className="closeIconBtnContainer">
              <IconButton size="small" color="secondary">
                <X />
              </IconButton>
              <IconButton size="medium" color="secondary">
                <X />
              </IconButton>
              <IconButton size="large" color="secondary">
                <X />
              </IconButton>
            </div>
            <div className="deleteIconBtnContainer">
              <IconButton size="small" color="danger">
                <Trash />
              </IconButton>
              <IconButton size="medium" color="danger">
                <Trash />
              </IconButton>
              <IconButton size="large" color="danger">
                <Trash />
              </IconButton>
            </div>
          </div>
          <Code language="javascript" codeString={SizeButtonExamples}></Code>
        </div>

        <div className="buttonsHeaderWrapper">
          <h2>Buttons with icons and label</h2>
          <p>
            Sometimes you might want to have icons for certain button to enhance
            the UX of the application as we recognize logos more easily than
            plain text. For example, if you have a delete button you can label
            it with a dustbin icon.
          </p>
          <div className="buttonsContainer">
            <Button color="primary" iconLabelBtn="iconLabelBtn">
              <Send />
              Send
            </Button>
            <Button color="secondary" iconLabelBtn="iconLabelBtn">
              <Upload />
              Upload
            </Button>
            <Button color="success" iconLabelBtn="iconLabelBtn">
              <Mic />
              Talk
            </Button>
            <Button
              color="disabled"
              iconLabelBtn="iconLabelBtn"
              disabled={true}
            >
              <MicOff />
              Muted
            </Button>
            <Button color="warning" iconLabelBtn="iconLabelBtn">
              <Save />
              Save
            </Button>
            <Button color="danger" iconLabelBtn="iconLabelBtn">
              <Trash />
              Delete
            </Button>
          </div>
          <Code language="javascript" codeString={IconLabelBtnExamples}></Code>
        </div>

        <div className="buttonsHeaderWrapper">
          <h2>Text Buttons</h2>
          <p>
            Text buttons are typically used for less-pronounced actions,
            including those located: In dialogs In cards In cards, text buttons
            help maintain an emphasis on card content.
          </p>
          <div className="buttonsContainer">
            <Button color="primary" textButton="textButton">
              Primary
            </Button>
            <Button color="secondary" textButton="textButton">
              Secondary
            </Button>
            <Button color="success" textButton="textButton">
              Success
            </Button>
            <Button color="warning" textButton="textButton">
              Warning
            </Button>
            <Button color="danger" textButton="textButton">
              Danger
            </Button>
            <Button
              color="linkButton"
              textButton="textButton"
              isLink
              hrefLink="/"
            >
              Link
            </Button>
            <Button color="disabled" textButton="textButton" disabled={true}>
              Disabled
            </Button>
          </div>
          <Code language="javascript" codeString={TextButtonExamples}></Code>
        </div>

        <div className="textHeaderWrapper">
          <h2>Text</h2>
          <p>
            Use typography text to present your design and content as clearly
            and efficiently as possible.
          </p>
          <h3>Examples</h3>
          <div className="exampleTextContainer">
            <Text variant="h1">h1. Heading</Text>
            <Text variant="h2">h2. Heading</Text>
            <Text variant="h3">h3. Heading</Text>
            <Text variant="h4">h4. Heading</Text>
            <Text variant="h5">h5. Heading</Text>
            <Text variant="h6">h6. Heading</Text>
            <Text variant="body">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
