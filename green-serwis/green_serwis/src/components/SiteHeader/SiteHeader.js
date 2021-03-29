import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 20 vh;
  margin-bottom: 5%;
`

const StyledHeader = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
`
const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`

const SiteHeader = ({ header, paragraph }) => (
  <StyledDiv>
    <StyledHeader>{header}</StyledHeader>
    <StyledParagraph>{paragraph}</StyledParagraph>
  </StyledDiv>
)

export default SiteHeader
