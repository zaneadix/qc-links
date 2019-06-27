import React from "react"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"

import QCIcon from "../../static/images/icons/qc-icon_round.svg"
import { mediaQueries, colors } from "../utils/style-vars"
import SEO from "../components/seo"
import Container from "../components/container"
import Image from "../components/image"
import styled from "@emotion/styled"

let globalStyles = css`
  body {
    color: ${colors.green};
  }
  a {
    color: ${colors.darkGreen};
    text-decoration: none;

    &:visted {
      color: ${colors.darkGreen};
    }
  }
`

let Header = styled.section`
  padding-top: 3.428571429rem;
  padding-bottom: 3.428571429rem;
  border-bottom: 2px solid #cee0d1;
  margin-bottom: 1.857142857rem;
  display: flex;
  justify-content: start;

  .logo {
    height: 6rem;
    width: 6rem;
    margin-right: 2rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin-bottom: 0;
    }
    .subtitle {
      margin-bottom: 0;
    }
  }
`

let LinksBody = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  border-bottom: 2px solid #cee0d1;
`

let Link = styled.div`
  flex-grow: 1;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);

  width: 48.5185185%;
  max-width: 48.5185185%;
  margin-right: 2.962963%;
  margin-bottom: 1.142857143rem;
  &:nth-child(2n) {
    margin-right: 0;
  }

  ${mediaQueries[1]} {
    width: 31.851851852%;
    max-width: 31.851851852%;
    margin-right: 2.222222222%;
    &:nth-child(2n) {
      margin-right: 2.222222222%;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  ${mediaQueries[3]} {
    width: 15.6156156%;
    max-width: 15.6156156%;
    margin-right: 1.2048193%;
    &:nth-child(2n),
    &:nth-child(3n) {
      margin-right: 1.2048193%;
    }
    &:nth-child(6n) {
      margin-right: 0;
    }
  }

  .destination {
    padding: 1rem;
    font-weight: 600;
  }
`

export default props => {
  let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Global styles={globalStyles}></Global>
      <Container>
        <Header>
          <svg class="logo">
            <use xlinkHref={`#${QCIcon.id}`} />
          </svg>
          <div class="info">
            <h2 class="title">Quarter Castle Kiera</h2>
            <a class="subtitle" href="http://quartercastle.co">
              www.quartercastle.co
            </a>
          </div>
        </Header>

        <h4>INSTAGRAM</h4>

        <LinksBody>
          {data.remarks.links.map(({ node: { data } }) => {
            return data.image ? (
              <Link key={data.publishTime}>
                <a href={data.destinationUrl} target="_blank_">
                  <Image src={data.image} alt={data.title} />
                  <div class="destination">
                    <span>{data.title}</span>
                  </div>
                </a>
              </Link>
            ) : null
          })}
        </LinksBody>
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    remarks: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___publishTime] }
    ) {
      links: edges {
        node {
          data: frontmatter {
            title
            image
            destinationUrl
            publishTime
          }
        }
      }
    }
  }
`
