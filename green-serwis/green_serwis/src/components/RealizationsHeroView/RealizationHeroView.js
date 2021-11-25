import React from "react";
import styled from "styled-components";
import RealizationPreview from "../RealizationPreview/RealizationPreview";

const Section = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.5%;
  width: calc(100% + 145px);
  padding-top: 10%;
  font-size: ${({ theme }) => theme.fontSize.l};
  height: 50vh;
  background: ${({theme}) => theme.gradient_grey};
  margin-bottom: 10px;
  left: -80px;
  position: relative;
`

const AboutDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5%;
    width: 100%;
`

const Header = styled.h4`
    color: ${({theme}) => theme.green};
    position: relative;
    float: right;
    margin-left: 80%;
    margin-top: -8%;
`


const SectionHeader = styled.h5`
    color: white;
    margin-left: 20%;
    margin-top: -10%;
`

const SectionArticle = styled.h6`
    color: white;
    margin-left: 20%;
    margin-top: -10%;
`

const FindOutMoreButton = styled.button`
    background: white;
    border: none;
    color: ${({theme}) => theme.gradient_green};
    height: 5vh;
    padding: 1%;
    margin-top: 2%;
    width: 20%;
    outline: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const RealizationHeroView = ({data}) => {
    return(
        <Section>
            <Header>
                Nasze realizacje
            </Header>
            <AboutDisplay>
                <RealizationPreview header="Ogrody"/>
                <RealizationPreview header="Drogi"/>
                <RealizationPreview header="Pozostałe"/>
            </AboutDisplay>
        </Section>
    )
}

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`

export default RealizationHeroView;