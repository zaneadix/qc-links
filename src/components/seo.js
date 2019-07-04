import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const KEYWORDS = [
  "quarter",
  "castle",
  "food",
  "eating",
  "baking",
  "vegan",
  "vegetarian",
  "travel",
]

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  title = title || site.siteMetadata.title
  description = description || site.siteMetadata.description
  keywords = KEYWORDS.concat(keywords)
  let keywordsMeta = {
    name: "keywords",
    content: keywords.join(", "),
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defautTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: "icon", type: "image/png", href: "favicon.png" }]}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        keywordsMeta,
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
