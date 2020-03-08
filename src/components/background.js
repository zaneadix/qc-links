import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

let StyledBackgroundImage = styled(BackgroundImage)`
  padding-bottom: 18rem;
  background-position: center bottom -524px;
  background-repeat: repeat-x;
  background-size: auto;

  &:before,
  &:after {
    background-position: center bottom -524px;
    background-repeat: repeat-x;
    background-size: auto;
  }
`

let Background = props => {
  let { background } = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "pattern-background.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = background.childImageSharp.fluid
  return (
    <StyledBackgroundImage
      Tag="section"
      fluid={imageData}
      className="pattern-background"
    >
      {props.children}
    </StyledBackgroundImage>
  )
}

export default Background
