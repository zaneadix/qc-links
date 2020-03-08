import React from "react"
import { css } from "@emotion/core"
import ReactMarkdown from "react-markdown"

import Hero from "../components/hero"
import Image from "../components/image"
import { colors } from "../utils/style-vars"
import { formatIngredient } from "../utils/functions"

let recipeStyles = css`
  .times-and-yield {
    border: 1px solid ${colors.midnightSnack};
    >* {
      box-sizing: border-box;
      width: 33.33333%;
      border-right: 1px solid ${colors.midnightSnack};
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;

      .measurement {
        margin-bottom: .25rem;
        font-weight: bold;
      }

      &:last-child {
        border-right: 0px;
      }
    }
  }

  .recipe {
    .ingredients {
      min-width: 40.1709402%;
      margin-right: {24/16}rem;

      .ingredients-list {
        margin-bottom: 2.5rem;
        .ingredient {
          font-size: ${18 / 16}rem;
        }
      }
    }

    .directions {
      .step {
        background-color: white;
        padding: 1.5rem 1.5rem 1.5rem 1rem;

        .step-number {
            min-width: 3.5rem;
            margin-right: 1rem;
            h1 {
              margin-bottom: 0;
              text-align: center;
              font-weight: bold;
              font-size: 2.5rem;
              color: ${colors.cremeDeMunch};
              letter-spacing: unset;
            } 
          }
        }

        p:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`

// width = 0.401709402

export default ({ pageContext: { slug, frontmatter } }) => {
  let { title, heroTitle, heroBackground, youtubeID } = frontmatter
  let { prepTime, cookTime, servings } = frontmatter
  let { ingredientSections, recipeSections } = frontmatter
  console.log(recipeSections)
  return (
    <div className="flex column child-stack-standard" css={recipeStyles}>
      <div className="container">
        <Hero
          title={heroTitle || title}
          image={heroBackground}
          youtubeID={youtubeID}
        ></Hero>
        <div className="times-and-yield flex row">
          <div className="prep-time">
            <h3 className="measurement serif">
              {prepTime.measurement} {prepTime.unit}
            </h3>
            <h3 className="floor">prep</h3>
          </div>
          <div className="cook-time">
            <h3 className="measurement serif">
              {cookTime.measurement} {cookTime.unit}
            </h3>
            <h3 className="floor">{cookTime.activity}</h3>
          </div>
          <div className="servings">
            <h3 className="measurement serif">{servings}</h3>
            <h3 className="floor">servings</h3>
          </div>
        </div>
      </div>
      <div className="container flex row recipe">
        <div className="ingredients">
          <h2 className="stack-small">Ingredients</h2>
          {ingredientSections
            ? ingredientSections.map((section, index) => (
                <div key={`ingredient-section-${index + 1}`}>
                  <h3 className="serif">{section.title}</h3>
                  <ul className="ingredients-list">
                    {section.ingredients.map((ingredient, index) => (
                      <li
                        key={`${section.title}-${index}`}
                        className="ingredient"
                      >
                        {formatIngredient(ingredient)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : null}
        </div>
        <div className="directions">
          <h2 className="stack-small">Directions</h2>
          {recipeSections
            ? recipeSections.map((section, index) => (
                <div key={`recipe-section-${index + 1}`}>
                  {section.topImage ? (
                    <Image src={section.topImage}></Image>
                  ) : null}
                  <div className="step flex row stack-small">
                    <div className="step-number flex align-center justify-center">
                      <h1>{index + 1}</h1>
                    </div>
                    <ReactMarkdown source={section.instructions} />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
