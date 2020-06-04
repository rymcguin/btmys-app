import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import BookCard from "../components/BOD/BookCard"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Libarary" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center', paddingTop:'10px'}}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <BookCard book={node.frontmatter} path={node.fields.slug} />
              ))}
            </div>
          )
        }}
      />
    </Layout>
  )
}
const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            bookID
            bookTitle
            date(formatString: "MMM Do, YYYY")
            bookImageUrl
            socialMediaImageUrl
            tags
            description
            amazonLink
            authors {
              name
              title
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
