import React, { Component } from "react"
import { Global, css } from "@emotion/core"

import { colors } from "../utils/style-vars"

let globalStyles = css`
  body {
    color: ${colors.green};
  }
  a {
    color: ${colors.darkGreen};
    text-decoration: none;

    &:visted {
      color: ${colors.darkGreen};
    }
  }
`

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <Global styles={globalStyles} />
        <main>{this.props.children}</main>
      </div>
    )
  }
}
