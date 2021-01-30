import React from "react"
import styled from "styled-components"
import NurserySelect from "../components/NurserySelection/NurserySelection"
import { graphql } from "gatsby"

const SelectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
`

const Nursery = ({ data }) => (
  <>
    {console.log(data)}
    <SelectionWrapper>
      {data.allFile.edges.map(({ node }) => (
        <NurserySelect
          title={node.name.replace("_", " ").toUpperCase()}
          background={node.childImageSharp.fluid.src}
        />
      ))}
    </SelectionWrapper>
  </>
)

export const query = graphql`
  query MyQuery {
    allFile(filter: { relativePath: { regex: "/nursery/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default Nursery
