import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Hero from "../components/hero"
import RecipeList from "../components/recipeList"
import SEO from "../components/seo"

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
    <div className="flex column section-stack">
      <SEO title="Quarter Castle" />
      <Hero
        preamble="plant-forward food"
        title="For people<br> who love to eat"
      ></Hero>
      <div className="container">
        <h3 className="title sans text-center">Recent recipes</h3>
        <RecipeList recipes={data.remarks.recipes.slice(0, 3)}></RecipeList>
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
