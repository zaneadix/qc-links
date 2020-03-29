import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors, mediaQueries } from "../utils/styleVars"
import Brand from "../../static/images/icons/qc_brand.svg"

let headerStyles = css`
  background-color: white;
  height: 4.5rem;

  .header-container {
    height: 100%;

    .brand {
      height: 2.5rem;
      width: 5rem;

      ${mediaQueries[1]} {
        width: 8.5rem;
        margin-right: 1.5rem;
      }

      svg {
        height: 2.5rem;
        width: 5.1875rem;
      }
    }

    .navigation {
      display: none;
      height: 100%;
      flex-direction: row;

      ${mediaQueries[1]} {
        display: flex;
      }

      .nav-item {
        width: 8.5rem;
        margin-right: 1.5rem;
        box-sizing: border-box;
        border-top: 0.25rem solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        letter-spacing: ${1.123 / 16}rem;

        &.active {
          border-color: ${colors.jungleJooch};
          color: ${colors.clayPlatter};
        }
      }
    }
  }
`

let Header = () => {
  return (
    <div className="header" css={headerStyles}>
      <div className="header-container container flex row align-center">
        <div className="brand flex justify-center">
          <svg>
            <use xlinkHref={`#${Brand.id}`} />
          </svg>
        </div>

        <div className="navigation">
          <Link className="nav-item" to="/" activeClassName="active">
            HOME
          </Link>
          <Link className="nav-item" to="/about/" activeClassName="active">
            ABOUT
          </Link>
          <Link
            className="nav-item"
            to="/recipes/"
            partiallyActive={true}
            activeClassName="active"
          >
            RECIPES
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
