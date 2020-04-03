import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = props => {
  const { codeString, language } = props;

  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Code;
