"use client";

import { css, createGlobalStyle } from "styled-components";

const styles = css`
body {
  position: fixed;
  background-color: #e70000;
  height: 100dvh;
  width: 100dvw;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

  Link {
    color: white;
    text-decoration: none;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
