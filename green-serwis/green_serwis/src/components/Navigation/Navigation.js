import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 5px;
  left: 2vw;
  width: 100% !important;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  font-family: "Nothing You Could Do";
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 30vw;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 12px;
  margin-left: 10vw;
`

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">GREEN SERWIS</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/about">o nas</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/nursery">szkółka leśna</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">galeria</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">kontakt</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
