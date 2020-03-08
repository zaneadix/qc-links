import React from "react"
import YouTube from "react-youtube"
import { css } from "@emotion/core"

import Image from "../components/image"
import { colors } from "../utils/style-vars"

let containerStyles = css`
  height: ${506 / 16}rem;
  background-color: ${colors.everglaze};
  // padding: 3.5rem;
  position: relative;

  .gatsby-image-wrapper {
    position: absolute !important;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .title-wrapper {
    position: absolute;
    bottom: 3.5rem;
    left: 3.5rem;
    z-index: 20;

    .preamble {
      color: ${colors.cremeDeMunch};
      margin-bottom: 0.25rem;
    }

    .title {
      font-size: 4.5rem;
      line-height: 4.6rem;
      color: white;
      font-weight: 900;
    }
  }

  .youtube-frame {
    position: absolute;
    top: 0;
    left: 0;

    // fuckin weird library styles?
    div & {
      margin-bottom: 0;
    }
  }
`

export default ({ preamble, title, image, youtubeID }) => {
  return (
    <div className="flex column justify-end" css={containerStyles}>
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
        <YouTube
          className="youtube-frame"
          videoId={youtubeID}
          opts={{
            width: 936,
            height: 506,
          }}
        ></YouTube>
      ) : null}
    </div>
  )
}
