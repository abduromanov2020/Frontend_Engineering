import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap');
body {
    font-family: 'Plus Jakarta Sans', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/* CSS Reset */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration:none;
}

`;

export default GlobalStyle;
