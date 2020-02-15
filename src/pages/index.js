import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Container from "../components/container"
import Hero from "../components/hero"

let recentRecipesStyles = css`
  .title {
    text-align: center;
  }
`

export default () => {
  return (
    <div>
      <SEO />
      <Container>
        <Hero
          preamble="plant-forward food"
          title="For people<br> who love to eat"
        ></Hero>
      </Container>
      <Container css={recentRecipesStyles}>
        <h3 className="title">Recent recipes</h3>
      </Container>
    </div>
  )
}

// export const query = graphql`
//   query {
//     remarks: allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___publishTime] }
//     ) {
//       links: edges {
//         node {
//           data: frontmatter {
//             title
//             image
//             destinationUrl
//             publishTime
//           }
//         }
//       }
//     }
//   }
// `
