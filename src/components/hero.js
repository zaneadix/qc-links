import React from "react"
import { css } from "@emotion/core"

import { colors } from "../utils/style-vars"

let containerStyles = css`
  height: ${506 / 16}rem;
  background-color: ${colors.everglaze};
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3.5rem;

  .preamble {
    color: ${colors.cremeDeMunch};
    margin-bottom: 0.25rem;
  }

  .title {
    font-family: "Playfair Display";
    font-size: 4.5rem;
    line-height: 4.6rem;
    color: white;
    margin-bottom: 0;
  }
`

export default props => {
  return (
    <div css={containerStyles} {...props}>
      {/* {props.children} */}

      <h3 className="preamble">{props.preamble}</h3>
      <h1
        className="title"
        dangerouslySetInnerHTML={{ __html: props.title }}
      ></h1>
    </div>
  )
}
