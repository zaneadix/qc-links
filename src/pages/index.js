import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import QCIcon from "../../static/images/icons/qc-icon_round.svg"
import SEO from "../components/seo"

let LogoBoi = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 60%;
    height: 60vh;
    margin-bottom: 1rem;
  }
`

export default props => {
  // let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <LogoBoi>
        <svg class="logo">
          <use xlinkHref={`#${QCIcon.id}`} />
        </svg>
        <Link to="/links/">
          <h2>Links</h2>
        </Link>
      </LogoBoi>
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
