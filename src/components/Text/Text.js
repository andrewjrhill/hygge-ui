import React from "react";
import "./Text.css";

const Text = props => {
  const { variant, children } = props;

  if (variant === "h1") {
    return <h1>{children}</h1>;
  } else if (variant === "h2") {
    return <h2>{children}</h2>;
  } else if (variant === "h3") {
    return <h3>{children}</h3>;
  } else if (variant === "h4") {
    return <h4>{children}</h4>;
  } else if (variant === "h5") {
    return <h5>{children}</h5>;
  } else if (variant === "h6") {
    return <h6>{children}</h6>;
  } else {
    return (
      <body>
        <p>{children}</p>
      </body>
    );
  }
};
export default Text;
