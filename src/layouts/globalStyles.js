import { css } from "@emotion/core"

import { colors, mediaQueries } from "../utils/style-vars"

let globalStyles = css`
  body,
  html {
    color: ${colors.midnightSnack};
    font-size: 16px;
    background-color: ${colors.linen};
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

  .floor {
    margin-bottom: 0;
  }

  .container {
    margin: 0 auto;
    padding: 0;
    width: 100%;

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

    &.child-stack {
      &-standard {
        > *:not(:last-child) {
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
