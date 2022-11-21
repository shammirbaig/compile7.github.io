import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang, meta, image, pathname, article }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const img = image ? `${site.siteMetadata.siteUrl}${image}` : ""
  const url = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          rel: "canonical",
          hreflang: "en",
          href: url,
        },
      ]}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          property: `twitter:site`,
          content: "@LoginRadius",
        },
        {
          property: `twitter:creator`,
          content: "@LoginRadius",
        },
        {
          property: `twitter:title`,
          content: metaTitle,
        },
        {
          property: `twitter:url`,
          content: url,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:card`,
          content: "summary_large_image",
        },
        {
          property: `twitter:image`,
          content: img,
        },
        {
          property: `twitter:image:height`,
          content: "512",
        },
        {
          property: `twitter:image:width`,
          content: "1024",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

export default SEO
