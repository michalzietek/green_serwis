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



const AboutUsHeroView = () => {
    return(
        <Section>
            <Header>
                NASZA FIRMA
            </Header>
            <AboutDisplay>
            <AboutUsList>
                <Header>
                    20%
                </Header>
            </AboutUsList>
            <p>
                ebebe
            </p>
            <p>
                ebebe1
            </p>
            </AboutDisplay>
            <button>
                Zapoznaj się z naszymi usługami
            </button>
        </Section>
    )
}

export default AboutUsHeroView;