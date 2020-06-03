import React, {useState} from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import BookNav from "../components/BOD/BookNav"
import Book from "../components/BOD/Book"

const IndexPage = ({data}) => {
  
  const books = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)
  const numBooks = books.length - 1
  const [bookId, setbookId] = useState(books[numBooks].bookID - 1);
  const book = books[bookId]
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Book of the Day
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {book.date}
            </Typography>
            <BookNav bookId={bookId} setbookId={setbookId} numBooks={numBooks} books={books} />
            <Book book={book} />
          </Box>
        </Container>
      </div>
    </Layout>
  )
}
export const data = graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              bookID
              bookTitle
              date(formatString:"MMM Do, YYYY")
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
