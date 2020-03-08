const path = require(`path`)
let { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require("netlify-cms-backend-fs/dist/fs")
  fsMiddlewareAPI(app)
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` })

    actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
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
  `)

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let { slug } = node.fields
    let frontmatter = node.frontmatter

    let template
    switch (/^\/(\w+)/.exec(slug)[1]) {
      case "recipes":
        template = "recipe"
        break
      default:
    }

    if (template) {
      actions.createPage({
        path: slug,
        component: path.resolve(`./src/templates/${template}.js`),
        context: {
          slug,
          frontmatter,
        },
      })
    }
  })
}
