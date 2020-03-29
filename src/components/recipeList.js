import React from "react"
import { css } from "@emotion/core"

import Image from "../components/image"

import { colors, mediaQueries } from "../utils/styleVars"

let recipeStyles = css`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mediaQueries[0]} {
    flex-direction: row;
  }

  .recipe {
    width: 70%;
    // margin-bottom: 1.5rem;
    background-color: white;
    position: relative;
    min-width: 31.6239316%;
    margin-right: 2.5641026%;
    &:nth-of-type(3n) {
      margin-right: 0;
      // margin-bottom: 0;
    }

    .details {
      text-align: center;
      padding: 1.125rem;
    }
  }
`

export default ({ recipes }) => {
  return (
    <div className="recipes" css={recipeStyles}>
      {recipes.slice(0, 3).map(entry => {
        let recipe = entry.node.frontmatter
        return (
          <div className="recipe" key={recipe.thumbnail}>
            <Image src={recipe.thumbnail} alt={recipe.title} />
            <div className="details">{recipe.title}</div>
          </div>
        )
      })}
    </div>
  )
}
