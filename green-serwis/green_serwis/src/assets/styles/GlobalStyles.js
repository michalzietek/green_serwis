import { createGlobalStyle } from "styled-components"

export const theme = {
  green: "hsl(136, 53%, 43%)",
  light_green: "#90EE90",
  grey100: "hsl(0, 0%, 96%)",
  grey200: "hsl(0, 0%, 90%)",
  grey300: "hsl(0, 0%, 70%)",
  black: "hsl(0, 0%, 0%)",
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
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto';
  }
`
