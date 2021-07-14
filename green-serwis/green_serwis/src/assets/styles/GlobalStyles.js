import { createGlobalStyle } from "styled-components"

export const theme = {
  green: "#8fd998",
  light_green: "#90EE90",
  grey100: "hsl(0, 0%, 96%)",
  grey200: "hsl(0, 0%, 90%)",
  grey300: "hsl(0, 0%, 70%)",
  black: "hsl(0, 0%, 0%)",
  gradient_grey: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
  gradient_green: "linear-gradient(to right, #71B280, #134E5E);",
  light: 300,
  bold: 600,
  fontSize: {
    xxs: "1rem",
    xs: "1.2rem",
    s: "1.6rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem",
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
    padding: 80px 65px 0;
    font-family: 'Roboto';
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto';
  }
`
