import React from "react";
import "./Links.css";

const Links = props => {
  const { linkColor, children, href } = props;

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <a onClick={handleClick} href={href} className={`${linkColor}`}>
      {children}
    </a>
  );
};
export default Links;
