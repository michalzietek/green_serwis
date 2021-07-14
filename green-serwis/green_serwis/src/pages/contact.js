import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ContactForm from "../components/ContactForm/ContactForm"
import { Link } from "gatsby"
import SiteHeader from "../components/SiteHeader/SiteHeader"

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 65px 80px auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
/*
const LocalizationWrapper = styled.div`
  background-image: url(${({ background }) => background});
`*/

const LocalizationWrapper = styled(Link)`
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
  border-radius: 10px;
  margin-bottom: 5%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 33vh;
  }
`
const headerData = {
  header: "Kontakt",
  paragraph:
    "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti reprehenderit eum ipsa suscipit vel asperiores praesentium blanditiis autem dolores. Assumenda unde saepe mollitia aspernatur esse distinctio. Labore inventore incidunt similique, dolores eaque alias nam dignissimos fugiat in tempore atque.",
}

const Contact = ({ data }) => (
  <>
    {console.log(data)}
    <SiteHeader header={headerData.header} paragraph={headerData.paragraph} />
    <PageWrapper>
      <ContactForm />
      <LocalizationWrapper background={data.staticMap.childFile.mapUrl} to="/" />
    </PageWrapper>
  </>
)

export const query = graphql`
  query StaticMapQuery {
    staticMap {
      childFile {
        publicURL
      }
    }
  }
`

export default Contact
