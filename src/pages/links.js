import React from "react"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"

import QCIcon from "../../static/images/icons/qc-icon_round.svg"
import SEO from "../components/seo"
import Container from "../components/container"
import Image from "../components/image"
import styled from "@emotion/styled"

let Header = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #cee0d1;
  display: flex;
  justify-content: start;

  .logo {
    width: 150px;
    margin-right: 2rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin-bottom: 0.5rem;
    }
    .subtitle {
      margin-bottom: 0;
    }
  }
`

let LinksBody = styled.section`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid #cee0d1;
`

let Link = styled.div`
  margin-right: 1.5rem;
  flex-grow: 1;
  width: 33%;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);

  &:nth-of-type(3) {
    margin-right: 0;
  }

  .destination {
    padding: 1rem;
    font-weight: 700;
    text-align: center;
  }
`

export default props => {
  let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Global
        styles={css`
          body {
            color: #28625f;
          }
        `}
      ></Global>
      <Container>
        <Header>
          <svg class="logo">
            <use xlinkHref={`#${QCIcon.id}`} />
          </svg>
          <div class="info">
            <h1 class="title">Quarter Castle Kiera</h1>
            <a href="http://quartercastle.co">
              <h3 class="subtitle">www.quartercastle.co</h3>
            </a>
          </div>
        </Header>
        <LinksBody>
          {data.remarks.links.map(({ node: { data } }) => {
            return data.image ? (
              <Link key={data.publishTime}>
                <a href={data.destinationUrl} target="_blank_">
                  <Image src={data.image} alt={data.title} />
                </a>
                <div class="destination">
                  <span>{data.destinationUrl}</span>
                </div>
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
