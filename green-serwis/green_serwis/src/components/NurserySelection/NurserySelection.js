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
`
const PreviewInfoLabel = styled.div`
  text-align: center;
  margin-top: 50%;
  color: white;
  padding: 5px 15px;

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
