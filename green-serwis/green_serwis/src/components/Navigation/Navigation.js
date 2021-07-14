import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100% !important;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  align-content: space-between;
  a {
    text-decoration: none;
    color: inherit;
  }
  background: ${({ active }) => (active ? "white" : "transparent")};
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "white" : "transparent")};
    transition: 0.8s all ease;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  font-family: "Nothing You Could Do";
  display: inline-block;
  margin-top: 1%;
  margin-left: 1%;
`

const MobileLogo = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 30%;
  justify-content: space-evenly;
  flex-shrink: 1;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: white;
  }
`
export const NavLink = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
      border-bottom:2px solid ${({theme}) => theme.green};
      transition: all 0.3s ease;
      transform-origin:  0% 50%;
    }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: linear 0.3s ease;
    }
  }
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 12px;
  margin-left: 10vw;

  ${NavLink}:hover & {
    border-bottom: 1px solid #000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`


const Navigation = () => {
  const [click, setClick] = useState(false)
  const [expand, setExpand] = useState(false)

  const scrollMenu = () => {
    window.scrollY >= 40 ? setExpand(true) : setExpand(false)
  }

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    scrollMenu()
    window.addEventListener("scroll", scrollMenu)
  }, [])

  return (
    <NavigationWrapper active={expand} click={click}>
      <Logo>
        <Link to="/">GREEN SERWIS</Link>
      </Logo>
      <MobileLogo onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileLogo>
      <NavigationList onClick={handleClick} click={click}>
        <NavigationListItem>
          <NavLink to="/about">o nas</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/nursery">szkółka leśna</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/gallery">galeria</NavLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavLink to="/contact">kontakt</NavLink>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
