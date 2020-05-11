import React from "react";
import {
  Trash,
  BookOpen,
  Clock,
  Info,
  ShoppingCart,
  Search,
  Download,
  Home,
  X,
  Send,
  Upload,
  MicOff,
  Mic,
  Mail,
  Save,
  ChevronRight,
  Minus,
  Sun,
  Settings,
  Grid
} from "react-feather";
import "./App.css";
import { Link, Router } from "@reach/router";
import Links from "./components/Breadcrumbs/Links";
import Breadcrumb from "./components/Breadcrumbs/Breadcrumb";
import About from "./components/Breadcrumbs/PagesForBreadcrumbs/About";
import Blog from "./components/Breadcrumbs/PagesForBreadcrumbs/Blog";
import Contact from "./components/Breadcrumbs/PagesForBreadcrumbs/Contact";
import Dashboard from "./components/Breadcrumbs/PagesForBreadcrumbs/Dashboard";
import HyggeUIHome from "./components/Breadcrumbs/PagesForBreadcrumbs/HyggeUIHome";
import Button from "./components/Button/Button";
import Code from "./components/Code/Code";
import IconButton from "./components/IconButton/IconButton";
import Text from "./components/Text/Text";
import Checkbox from "./components/Checkbox/Checkbox";
import UseTextfield from "./components/Textfield/UseTextfield";
import Textfield from "./components/Textfield/Textfield";
import { ButtonExamples } from "./components/Button/Button.examples";
import { CheckboxExamples } from "./components/Checkbox/Checkbox.examples";
import { IconButtonExamples } from "./components/IconButton/IconButton.examples";
import { IconLabelBtnExamples } from "./components/Button/IconLabelBtn.examples";
import { SizeButtonExamples } from "./components/Button/SizeButton.examples";
import { TextButtonExamples } from "./components/Button/TextButton.examples";

const Separator = ({ children, ...props }) => (
  <span style={{ color: "teal" }} {...props}>
    {children}
  </span>
);

const options = {
  icons: {
    HyggeUIHome: Home,
    Dashboard: Settings,
    Contact: Mail,
    About: Info,
    Blog: BookOpen
  },
  items: [
    { to: "/", label: "HyggeUI" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" }
  ]
};

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
          <h3>Accessibility</h3>
          <p>A few key factors to follow for an accessible typography:</p>
          <ul className="acessabilityContainer">
            <li>
              <strong>Color</strong>. Provide enough contrast between text and
              its background, check out the minimum recommended{" "}
              <a
                className="link"
                href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
              >
                WCAG 2.0 color contrast ratio{" "}
              </a>
              (4.5:1).
            </li>
            <li>
              <strong>Font size</strong>. Use
              <a
                className="link"
                href="https://material-ui.com/customization/typography/#font-size"
              >
                {" "}
                relative units (rem){" "}
              </a>
              to accommodate the user's settings.
            </li>
            <li>
              <strong>Heading hierarchy</strong>.
              <a
                className="link"
                href="https://www.w3.org/WAI/tutorials/page-structure/headings/"
              >
                {" "}
                Don't skip{" "}
              </a>
              heading levels. In order to solve this problem, you need to{" "}
              <a
                className="link"
                href="https://material-ui.com/components/typography/#changing-the-semantic-element"
              >
                separate the semantics from the style.
              </a>
            </li>
          </ul>
        </div>
        <div className="textHeaderWrapper">
          <h2>Checkboxes</h2>
          <p>
            Checkboxes allow the user to select one or more items from a set.{" "}
            <a
              className="link"
              href="https://material.io/components/selection-controls#checkboxes"
            >
              Checkboxes
            </a>{" "}
            can be used to turn an option on or off. If you have multiple
            options appearing in a list, you can preserve space by using
            checkboxes instead of on/off switches. If you have a single option,
            avoid using a checkbox and use an on/off switch instead.
          </p>
          <h3>Basic checkboxes</h3>
          <div className="basicCheckboxContainer">
            <Checkbox color="primary" checked="checked"></Checkbox>
            <Checkbox color="secondary" checked="checked"></Checkbox>
            <Checkbox color="secondary" checked="checked"></Checkbox>
            <Checkbox color="secondary" checked="checked"></Checkbox>
          </div>
          <Code language="javascript" codeString={CheckboxExamples}></Code>
        </div>

        <div className="buttonsHeaderWrapper">
          <h2>Breadcrumbs</h2>
          <p>
            Breadcrumbs allow users to make selections from a range of values.
          </p>
          <h3>Collapsed breadcrumb with routing</h3>
          <div className="breadcrumbContainer">
            <Breadcrumb separator={<Separator>/</Separator>}>
              {options.items.map(({ to, label }) => {
                const Icon = options.icons[label];
                return (
                  <div key={to} className="some-custom-classname">
                    {Icon && <Icon />}
                    <Link to={to}>{label}</Link>
                  </div>
                );
              })}
            </Breadcrumb>
            <Router>
              <HyggeUIHome path="/" />
              <Dashboard path="/dashboard" />
              <Contact path="/contact" />
              <About path="/about" />
              <Blog path="/blog" />
            </Router>
          </div>
        </div>
        <h3>Simple breadcrumb</h3>
        <div className="breadcrumbContainer">
          <Links linkColor="linkPrimary">HyggeUI /</Links>{" "}
          <Links linkColor="linkPrimary">Core /</Links>{" "}
          <Links linkColor="linkSecondary">Breadcrumb</Links>
        </div>
        <h3>Custom separator</h3>
        <div className="breadcrumbContainer">
          <Links linkColor="linkPrimary">HyggeUI</Links>
          <Links linkColor="linkPrimary">
            <ChevronRight />
            Core
          </Links>
          <Links linkColor="linkSecondary">
            <ChevronRight />
            Breadcrumb
          </Links>
          <br />
          <Links linkColor="linkPrimary">HyggeUI</Links>
          <Links linkColor="linkPrimary">
            <Minus />
            Core
          </Links>
          <Links linkColor="linkSecondary">
            <Minus />
            Breadcrumb
          </Links>
        </div>
        <h3>Breadcrumbs with icons</h3>
        <div className="breadcrumbContainer">
          <Links linkColor="linkPrimary">
            <Home />
            HyggeUI /
          </Links>{" "}
          <Links linkColor="linkPrimary">
            <Sun />
            Core /
          </Links>{" "}
          <Links linkColor="linkSecondary">
            <Grid />
            Breadcrumb
          </Links>
        </div>

        <div className="textfieldHeaderWrapper">
          <h2>Textfields</h2>
          <p>
            Textfields let users enter and edit text. Textfields allow users to
            enter text into a UI. They typically appear in forms and dialogs.
          </p>
          <h3>Textfield</h3>
          <div className="submitTextfieldContainer">
            <UseTextfield>
              <input type="text" />
              <input type="submit" value="Submit" />
            </UseTextfield>
          </div>
          <Code></Code>
          <div className="filledTextfieldContainer">
            <Textfield
              HUIFilledTextfield="HUIFilledTextfield"
              id="Filled"
            ></Textfield>
          </div>
          <div className="OutlinedTextfieldContainer">
            <Textfield
              HUIOutlinedTextfield="HUIOutlinedTextfield"
              id="Outlined"
            ></Textfield>
          </div>
          <Code></Code>

          <Textfield SelectForm></Textfield>
        </div>
      </div>
    </header>
  );
}

export default App;
