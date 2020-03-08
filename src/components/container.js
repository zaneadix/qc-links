import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQueries } from "../utils/style-vars"

let containerStyles = css`
  margin: 1rem auto;

  padding: 0;

  ${mediaQueries[0]} {
    max-width: 540px;
  }

  ${mediaQueries[1]} {
    max-width: 720px;
  }

  ${mediaQueries[2]} {
    max-width: 936px;
  }

  ${mediaQueries[3]} {
    max-width: 936px;
  }

  ${mediaQueries[4]} {
    max-width: 936px;
  }
`

export default props => {
  return (
    <div css={containerStyles} {...props}>
      {props.children}
    </div>
  )
}
