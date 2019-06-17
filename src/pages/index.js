import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

export default props => {
  let { data } = props

  return (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {data.remarks.links.map(({ node: { data } }) => {
        return (
          <div>
            <img src={data.imageUrl} alt={data.destinationUrl} />
            <a href={data.destinationUrl} target="_blank_">
              Go
            </a>
          </div>
        )
      })}
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
//             imageUrl
//             destinationUrl
//           }
//         }
//       }
//     }
//   }
// `
