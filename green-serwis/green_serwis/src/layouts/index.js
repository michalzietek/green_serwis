import React from "react"
import { GlobalStyle, theme } from "../assets/styles/globalStyles"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
    </ThemeProvider>
  </>
)

export default MainLayout
