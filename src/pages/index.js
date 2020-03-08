import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"

let recentRecipesStyles = css`
  .title {
    text-align: center;
  }

  .recipes {
    display: flex;
    flex-direction: row;

    .recipe {
      background-color: white;
      position: relative;
      min-width: 31.6239316%;
      margin-right: 2.5641026%;
      &:nth-of-type(3n) {
        margin-right: 0;
      }

      .details {
        text-align: center;
        padding: 1.125rem;
      }
    }
  }
`

let lifestyleStyles = css`
  background-color: white;
  padding: 2.5rem 0;

  .message {
    font-family: "Playfair Display";
    font-size: 1.5rem;
    text-align: center;
    max-width: 80%;
    margin: 0 auto 2rem;
  }
`

let blogPostStyles = css`
  .image {
    width: 55%;
  }
  .post-preview {
    width: 45%;
    padding: 2rem 3rem;
    background-color: white;

    .date {
      font-size: 0.75rem;
      font-weight: 300;
      letter-spacing: 0.09375rem;
    }

    .title {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid;
    }

    .read-more {
      float: right;
      font-size: 0.75rem;
    }
  }
`

export default ({ data }) => {
  return (
    <div className="flex column child-stack-standard">
      <SEO title="Quarter Castle" />
      <div className="container">
        <Hero
          preamble="plant-forward food"
          title="For people<br> who love to eat"
        ></Hero>
      </div>
      <div className="container" css={recentRecipesStyles}>
        <h3 className="title sans">Recent recipes</h3>
        <div className="recipes">
          {data.remarks.recipes.slice(0, 3).map(entry => {
            let recipe = entry.node.frontmatter
            return (
              <div className="recipe" key={recipe.thumbnail}>
                <Image src={recipe.thumbnail} alt={recipe.title} />
                <div className="details">{recipe.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div css={lifestyleStyles}>
        <div className="container flex column justify-center">
          <p className="message">
            Some filler text goes here, talking about important things that can
            happen by giving up meat but not sacrificing experience
          </p>
          <Link className="button" to="/recipes/">
            Browse Recipes
          </Link>
        </div>
      </div>
      <div css={blogPostStyles}>
        <div className="container flex row">
          <div className="image" style={{ backgroundColor: "grey" }}></div>
          <div className="post-preview">
            <span className="date sans floor uppercase">month 00, 2020</span>
            <h3 className="title serif">Title of the Blerg</h3>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui
              mollis metus. Amet, eu, habitant adipiscing eleifend. Ante id in
              tempor risus. Iaculis diam congue ultrices suspendisse mauris. Hac
              eu malesuada nisl justo ut vestibulum arcu egestas. Suspendisse
              sit sodales enim cras. Diam suspendisse sit consectetur tellus in
              dictum.
            </p>
            <a className="read-more">read more</a>
          </div>
        </div>
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
          frontmatter {
            thumbnail
            title
          }
        }
      }
    }
  }
`
