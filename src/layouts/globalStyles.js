import { css } from "@emotion/core"

import { colors } from "../utils/style-vars"

let globalStyles = css`
  body,
  html {
    color: ${colors.midnightSnack};
    font-size: 16px;
    background-color: ${colors.linen};
  }

  a {
    color: ${colors.everglaze};
    text-decoration: none;

    &:visted {
      color: ${colors.everglaze};
    }
  }

  h3 {
    font-size: 1.25rem;
    letter-spacing: 0.25rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`

export default globalStyles
