import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQueries } from "../utils/style-vars"

let containerStyles = css`
  margin: 0 auto;

  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${mediaQueries[0]} {
    max-width: 540px;
    padding-left: 1rem;
    padding-right: 1rem;
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
