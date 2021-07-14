import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { qraphql } from "gatsby"
import aboutPreview from "../components/AboutPreview/aboutPreview"
import AboutUsHeroView from "../components/AboutUsHeroView/AboutUsHeroView"

const HeroWrapper = styled.div`
margin-bottom: 10px;
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex-wrap: nowrap;

  position: absolute;
  width: 100%;
  height: 310px;
  top: 30%;
  color: ${({ theme }) => theme.grey100};
  justify-content: center;
  align-content: center;

  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 1));
  font-weight: 600;
  font-size: 6rem;
  text-align: left;
`
const HeroImageWrapper = styled.div`
  width: 40%;
  height: 90vh;
  position: relative;
  float: right;
  margin-bottom: 10px;
`
const HeroTitle = styled.div`
  width: 60%;
  height: 90vh;
  position: relative;
  left: 35%;
  transform: translateX(-50%);
  top: 50%;
  float: right;
`
const FindOutMoreButton = styled.button`
  background: ${({theme}) => theme.gradient_green};
  border: none;
  color: white;
  height: 5vh;
  padding: 1%;
  margin-top: 2%;

`
const HeroImage = styled.img`
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: contain;
  float: right;
  clear: right;
  border-radius: 0px 20px 0px 20px;
`

const redirectHeroButton = () => {
  console.log('xd');
}

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <HeroWrapper>
    <HeroImageWrapper>
      <HeroImage src={data.file.publicURL} />
    </HeroImageWrapper>
    <HeroTitle>
      <StyledHeader>
      Pamiętajmy o ogrodach
      <FindOutMoreButton onClick={redirectHeroButton}>
        dowiedz się więcej
      </FindOutMoreButton>
      </StyledHeader>
    </HeroTitle>
    </HeroWrapper>
    <AboutUsHeroView/>
    <aboutPreview></aboutPreview>
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
