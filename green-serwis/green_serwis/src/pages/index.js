import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { qraphql } from "gatsby"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex-wrap: nowrap;

  position: absolute;
  width: 950px;
  height: 310px;
  left: 20%;
  top: 30%;
  color: ${({ theme }) => theme.grey100};
  justify-content: center;
  align-content: center;

  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 1));
  font-weight: 600;
  font-size: 6rem;
  text-align: center;
`
const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: -80px;
`
const HeroImage = styled.img`
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
`
const Slider = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  padding-bottom: 3%;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 65px);
  padding-top: 10%;
  font-size: ${({ theme }) => theme.fontSize.l};
`

const IndexPage = ({ data }) => (
  <>
    {console.log(data)}
    <SEO title="Home" />
    <HeroWrapper>
      <HeroImage src={data.file.publicURL} />
      <Slider>ODKRYJ</Slider>
    </HeroWrapper>
    <Header>AKTUALNOSCI</Header>
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
