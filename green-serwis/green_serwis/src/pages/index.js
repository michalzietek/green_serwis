import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { qraphql } from "gatsby"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 950px;
  height: 310px;
  left: 10px;
  top: 287px;
  color: ${({ theme }) => theme.black};

  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 1));
  font-family: "Nothing You Could Do";
  font-weight: 600;
  font-size: 50px;
`
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
  background-repeat: no-repeat;
`

const IndexPage = ({ data }) => (
  <>
    {console.log(data)}
    <SEO title="Home" />
    <HeroImage src={data.file.publicURL} />
    <StyledHeader>Porozmawiajmy o ogrodach</StyledHeader>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`

export default IndexPage
