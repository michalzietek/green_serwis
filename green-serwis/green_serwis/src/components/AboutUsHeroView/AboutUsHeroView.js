import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.5%;
  width: calc(100% + 145px);
  padding-top: 10%;
  font-size: ${({ theme }) => theme.fontSize.l};
  height: 50vh;
  background: ${({theme}) => theme.gradient_green};
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
    color: white;
    position: relative;
    float: right;
    margin-left: 80%;
    margin-top: -8%;
`
const AboutUsList = styled.li`
    position: relative;
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


const AboutUsHeroView = () => {
    return(
        <Section>
            <Header>
                o nas
            </Header>
            <AboutDisplay>
                <div>
                <SectionHeader>
                    20+
                </SectionHeader>
                <SectionArticle>
                    lat doświadczenia
                </SectionArticle>
                </div>
                <div>
                <SectionHeader>
                    100+
                </SectionHeader>
                <SectionArticle>
                    skończonych realizacji
                </SectionArticle>
                </div>
                <div>
                <SectionHeader>
                    100000+
                </SectionHeader>
                <SectionArticle>
                    posadzonych drzew
                </SectionArticle>
                </div>
            </AboutDisplay>
            <ButtonWrapper>
                <FindOutMoreButton>
                    Zapoznaj się z naszymi usługami
                </FindOutMoreButton>
            </ButtonWrapper>
        </Section>
    )
}

export default AboutUsHeroView;