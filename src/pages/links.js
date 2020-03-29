import React, { useState } from "react"
import { css } from "@emotion/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { columnize } from "../utils/functions"

import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"

let linksStyles = css`
  display: flex;
  flex-wrap: wrap;

  .link {
    width: 31.6239316%;
    margin-right: 2.5641026%;

    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }
`

export default ({ data }) => {
  let [showCount, setShowCount] = useState(12)
  let links = data.remarks.links //.slice(0, showCount)

  return (
    <div className="flex column child-stack-standard">
      <SEO title="Links - Quarter Castle" />
      <Hero collapse={true} preamble="links from" title="Instagram"></Hero>
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
