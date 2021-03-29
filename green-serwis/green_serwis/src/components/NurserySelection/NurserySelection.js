import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 30vw;
  height: calc(100vh - 80px);
  background-color: hsl(0, 0%, 95%);
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  text-decoration: none;
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 33vh;
  }

  &:hover div {
    transform: scale(1.2);
  }
`
const PreviewInfoLabel = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2,
  p {
    margin: 5px;
  }
`
const NurserySelect = ({ background, title }) => (
  <>
    <PreviewWrapper background={background} to="/">
      <PreviewInfoLabel>
        <h2>{title}</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  </>
)

export default NurserySelect
