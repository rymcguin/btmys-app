import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Book from '../components/BOD/Book'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery query = {indexQuery} render ={(data) => {
      return(
        <div>
          {data.allMarkdownRemark.edges.map( ({node}) => (
            <Book book={node.frontmatter} />

            ))}
        </div>
      )
    }}/>

  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___bookID], order:DESC}) {
      edges {
        node {
          id
          frontmatter {
            bookID
            bookTitle
            date
            bookImageUrl
            socialMediaImageUrl
            tags
            description
            amazonLink
            authors {
              personID
              name
              profileImageUrl
              title
              bio
            }
            endorsements {
              personId
              name
              bio
              body
              profileImageUrl
              title
            }
            path
          }
        }
      }
    }
  }
`

export default IndexPage
