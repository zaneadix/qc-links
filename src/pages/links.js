import React from "react"
import { css } from "@emotion/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"
import { mediaQueries } from "../utils/styleVars"

let linksStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  padding-top: 1rem;

  ${mediaQueries[2]} {
    margin-right: -1rem;
    margin-left: -1rem;
  }

  .link {
    flex: 1 0 50%;
    max-width: 50%;
    padding: 1rem;

    ${mediaQueries[1]} {
      flex: 1 0 33.3%;
      max-width: 33.3%;
    }

    ${mediaQueries[2]} {
      flex: 1 0 25%;
      max-width: 25%;
    }
  }
`

export default ({ data }) => {
  // let [showCount, setShowCount] = useState(12)
  let links = data.remarks.links //.slice(0, showCount)

  return (
    <div className="flex column">
      <SEO title="Links - Quarter Castle" collapse={true} />
      <Hero preamble="links from" title="Instagram"></Hero>
      <div className="container">
        <div className="links" css={linksStyles}>
          {links.map(({ node: { data } }) => {
            return data.image ? (
              <div className="link">
                <OutboundLink
                  className="recipe"
                  href={data.destinationUrl}
                  key={data.thumbnail}
                  target="_blank_"
                >
                  <Image src={data.image} alt={data.title} />
                </OutboundLink>
              </div>
            ) : null
          })}

          {/* <button className="bare">Load More</button> */}
        </div>
      </div>
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
            type
          }
        }
      }
    }
  }
`
