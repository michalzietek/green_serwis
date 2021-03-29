import React from "react"
import { GlobalStyle, theme } from "../assets/styles/globalStyles"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  </>
)

export default MainLayout
