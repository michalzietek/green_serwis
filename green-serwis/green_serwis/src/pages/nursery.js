import React from "react"
import styled from "styled-components"
import NurserySelect from "../components/NurserySelection/NurserySelection"
import { graphql } from "gatsby"
import SiteHeader from "../components/SiteHeader/SiteHeader"

const SelectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const headerData = {
  header: "Szkółka leśna",
  paragraph:
    "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eum ipsa suscipit vel asperiores praesentium blanditiis autem dolores. Assumenda unde saepe mollitia aspernatur esse distinctio. Labore inventore incidunt similique, dolores eaque alias nam dignissimos fugiat in tempore atque.",
}

const Nursery = ({ data }) => (
  <>
    <SiteHeader header={headerData.header} paragraph={headerData.paragraph} />
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
