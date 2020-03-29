import React from "react"
import YouTube from "react-youtube"
import { css } from "@emotion/core"

import Image from "../components/image"
import { colors, mediaQueries } from "../utils/styleVars"

let containerStyles = css`
  background-color: ${colors.everglaze};
  position: relative;
  margin: 0 -1rem;

  ${mediaQueries[2]} {
    margin: 0 0;
  }

  &::after {
    display: block;
    content: " ";
    width: 100%;
    padding-bottom: 56.25%;
  }

  .title-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 2.5rem 1rem;
    z-index: 100;
    .title {
      font-size: 4.5rem;
      line-height: 4.5rem;
      color: white;
      font-weight: 900;
    }

    .preamble {
      color: ${colors.cremeDeMunch};
      margin-bottom: 0.25rem;
    }

    ${mediaQueries[0]} {
      padding: 2.5rem 1.5rem;
      .title {
        font-size: 4.5rem;
        line-height: 4.5rem;
      }
    }

    ${mediaQueries[1]} {
      padding: 3rem 2.5rem;
    }

    ${mediaQueries[2]} {
      padding: 3.5rem;
    }
  }

  .gatsby-image-wrapper {
    z-index: 10;
  }

  .youtube-frame {
    // fuckin weird library styles?
    div & {
      margin-bottom: 0;
    }
  }

  .gatsby-image-wrapper,
  .youtube-frame {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default ({ collapse = false, preamble, title, image, youtubeID }) => {
  return (
    <div className="hero container fluid-1">
      <div
        css={containerStyles}
        style={{ height: collapse ? "min-content" : null }}
      >
        {/* Need alternate text */}
        {image && !youtubeID ? <Image src={image}></Image> : null}

        {!youtubeID ? (
          <div className="title-wrapper">
            <h3 className="preamble sans">{preamble}</h3>
            <h1
              className="title serif floor"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
        ) : null}

        {/* NEED HEIGHT LOGIC */}
        {youtubeID ? (
          <YouTube className="youtube-frame" videoId={youtubeID}></YouTube>
        ) : null}
      </div>
    </div>
  )
}
