import React, { useState } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

// import { colors, mediaQueries } from "../utils/styleVars"

import Hero from "../components/hero"
import RecipeList from "../components/recipeList"
import SEO from "../components/seo"

let recentRecipesStyles = css`
  .title {
    text-align: center;
  }
`

export default ({ data }) => {
  let { recipes } = data.remarks
  let [heroIndex] = useState(
    Math.floor(Math.random() * Math.floor(recipes.length))
  )

  let heroRecipe = recipes[heroIndex].node.frontmatter

  return (
    <div className="flex column section-stack">
      <SEO title="Recipes - Quarter Castle" />
      <Hero image={heroRecipe.heroBackground} title="Recipes"></Hero>
      <div className="container">
        <RecipeList recipes={recipes}></RecipeList>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    remarks: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___publishTime] }
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
    ) {
      recipes: edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cookTime {
              activity
              measurement
              unit
            }
            destinationUrl
            heroBackground
            heroTitle
            image
            ingredientSections {
              title
              ingredients {
                measurement
                name
                unit
              }
            }
            prepTime {
              measurement
              unit
            }
            publishTime
            recipeSections {
              instructions
              topImage
            }
            servings
            title
            type
            thumbnail
            youtubeID
          }
        }
      }
    }
  }
`
