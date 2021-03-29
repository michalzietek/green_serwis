import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { Link } from "gatsby"
import { DiScala } from "react-icons/di"

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  position: absolute;
  margin-left: -65px;
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  font-family: "Nothing You Could Do";
  display: inline-block;
  color: white;
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <Logo to="/">GREEN SERWIS</Logo>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/Green-Serwis-124671618178032"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="tel:+48791984488"
              target="_blank"
              aria-label="Phone"
            >
              <FaPhoneAlt />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
