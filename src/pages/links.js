import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import { mediaQueries } from "../utils/style-vars"
import InstaIcon from "../../static/images/icons/insta_logo-icon.svg"
import QCIcon from "../../static/images/icons/qc-icon_round.svg"
import SEO from "../components/seo"
import Container from "../components/container"
import Image from "../components/image"

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

let SectionHeader = styled.h4`
  display: flex;
  align-items: center;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`

let LinksBody = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  margin-bottom: 1.857142857rem;
  border-bottom: 2px solid #cee0d1;
`

let sharedLinkStyles = `
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);

  .destination {
    padding: 1rem 0.6rem;
    font-weight: 600;
    font-size: 0.9rem;
  }
`

let Link = styled.div`
  ${sharedLinkStyles}

  width: 48.5185185%;
  margin-right: 2.962963%;
  margin-bottom: 1.142857143rem;
  &:nth-child(2n) {
    margin-right: 0;
  }

  ${mediaQueries[1]} {
    width: 31.851851852%;
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
    margin-right: 1.2048193%;
    &:nth-child(2n),
    &:nth-child(3n) {
      margin-right: 1.2048193%;
    }
    &:nth-child(6n) {
      margin-right: 0;
    }
  }
`

let Social = styled.div`
  ${sharedLinkStyles}

  width: 100%;
  margin-bottom: 1.142857143rem;

  ${mediaQueries[1]} {
    width: 48.8888889%;
    margin-right: 2.222222222%;
    &:nth-child(2n) {
      margin-right: 0%;
    }
  }

  ${mediaQueries[3]} {
    width: 32.530120467%;
    max-width: 32.530120467%;
    margin-right: 1.2048193%;
    &:nth-child(2n) {
      margin-right: 1.2048193%;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

export default props => {
  let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <Header>
          <svg className="logo">
            <use xlinkHref={`#${QCIcon.id}`} />
          </svg>
          <div class="info">
            <h2 class="title">Quarter Castle Kiera</h2>
            <a class="subtitle" href="http://quartercastle.co">
              www.quartercastle.co
            </a>
          </div>
        </Header>

        <SectionHeader>
          <svg>
            <use xlinkHref={`#${InstaIcon.id}`} />
          </svg>
          INSTAGRAM
        </SectionHeader>

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

        <SectionHeader>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </svg>
          ELSEWHERE
        </SectionHeader>

        <LinksBody>
          <Social>
            <a href="https://twitter.com/quartercastle" target="_blank_">
              <div class="destination">
                <span>Twitter - Quarter Castle Thoughts</span>
              </div>
            </a>
          </Social>
          <Social>
            <a href="http://quartercastle.co/youtube" target="_blank_">
              <div class="destination">
                <span>Youtube - Quarter Castle Videos</span>
              </div>
            </a>
          </Social>
          <Social>
            <a href="http://quartercastle.co/youtube" target="_blank_">
              <div class="destination">
                <span>Youtube - Quarter Castle Videos</span>
              </div>
            </a>
          </Social>
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
