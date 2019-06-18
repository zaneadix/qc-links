import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/container"

export default props => {
  // let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <h1>Quarter Castle</h1>
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
