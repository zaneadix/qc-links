import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "image-uploads" } }
        ) {
          edges {
            node {
              relativePath
              sourceInstanceName
              dir
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(props, data)
      let image = data.images.edges.find(image => {
        return props.src
          ? image.node.relativePath === props.src.split("/").pop()
          : null
      })
      image && (image = image.node.childImageSharp)

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return image ? <Image alt={props.alt} fluid={image.fluid} /> : null
    }}
  />
)
