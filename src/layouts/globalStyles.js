import { css } from "@emotion/core"

import { colors, mediaQueries } from "../utils/styleVars"

let globalStyles = css`
  body,
  html {
    color: ${colors.midnightSnack};
    background-color: ${colors.linen};
    font-size: 13px;

    ${mediaQueries[0]} {
      font-size: 14px;
    }

    ${mediaQueries[1]} {
      font-size: 16px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: 0.25rem;
    text-transform: uppercase;

    &.serif {
      font-family: "Playfair Display";
      text-transform: unset;
      letter-spacing: unset;
    }
  }

  h3,
  h4,
  h5,
  h6 {
    &.serif {
      font-weight: bold;
      letter-spacing: 0.5px;
    }
  }

  .sans {
    font-family: Montserrat;
  }

  .uppercase {
    text-transform: uppercase;
  }

  a,
  button {
    font-family: Montserrat;
    text-decoration: none;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  a {
    color: ${colors.everglaze};

    &:visted {
      color: ${colors.everglaze};
    }
  }

  button,
  a.button {
    font-family: Montserrat;
    color: ${colors.linen};
    background-color: ${colors.everglaze};
    text-transform: uppercase;
    border: 0px solid transparent;
    padding: 1rem 4.5rem;

    .flex.column & {
      margin: 0 auto;
    }
  }

  .text {
    &-center {
      text-align: center;
    }
  }

  .floor {
    margin-bottom: 0;
  }

  .container {
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;

    &:not(.fluid) {
      &:not(.fluid-0) ${mediaQueries[0]} {
        max-width: calc(540px + 2rem);
      }

      &:not(.fluid-1) ${mediaQueries[1]} {
        max-width: calc(720px + 2rem);
      }

      ${mediaQueries[2]} {
        max-width: calc(936px + 2rem);
      }
    }

    .over-pad {
      margin: 0 -1rem;
    }
  }

  &.flex {
    display: flex;

    &.column {
      flex-direction: column;
    }

    &.align-center {
      align-items: center;
    }

    &.justify-center {
      justify-content: center;
    }

    &.justify-end {
      justify-content: flex-end;
    }

    &.section-stack {
      > *:not(:last-child) {
        margin-bottom: 3rem;

        ${mediaQueries[0]} {
          margin-bottom: 3rem;
        }

        ${mediaQueries[1]} {
          margin-bottom: 3.5rem;
        }
      }
    }
  }

  .stack {
    &-small {
      margin-bottom: 2rem;
    }
    &-standard {
      margin-bottom: 3.5rem;
    }
  }
`

export default globalStyles
