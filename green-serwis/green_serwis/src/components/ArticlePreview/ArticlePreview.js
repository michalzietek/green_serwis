import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-image: url(${({ background }) => background});
`
const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`

const Preview = ({ title, excerpt, background, slug }) => (
  <PreviewWrapper background={background} to={`/nursery/${slug}`}>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
)

export default Preview
