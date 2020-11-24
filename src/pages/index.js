import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { graphql } from "gatsby";
import BookNav from "../components/BOD/BookNav";
import Book from "../components/BOD/Book";
import Card from "@material-ui/core/Card";

const IndexPage = ({ data }) => {
  const books = data.allMarkdownRemark.edges.map(
    ({ node }) => node.frontmatter
  );
  const paths = data.allMarkdownRemark.edges.map(({ node }) => node.fields);
  const numBooks = books.length - 1;
  const [bookId, setbookId] = useState(books[numBooks].bookID - 1);
  const slug = paths[bookId].slug;
  const book = books[bookId];
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Home" />
        <div>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@smarter_books" />
          <meta name="twitter:title" content={`${book.date}: ${book.title}`} />
          <meta name="twitter:description" content={`${book.description.substring(0, 100)}...`}/>
          <meta name="twitter:image" content={book.socialMediaImageUrl} />
          <Container maxWidth="sm">
            <Box my={4}>
              <Card variant="outlined" style={{ padding: "15px" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Book of the Week
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {book.date}
                </Typography>
                <BookNav
                  bookId={bookId}
                  setbookId={setbookId}
                  numBooks={numBooks}
                  books={books}
                />
                <Book book={book} path={slug} />
              </Card>
            </Box>
          </Container>
        </div>
      </Layout>
    </React.Fragment>
  );
};
export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            bookID
            bookTitle
            date(formatString: "dddd MMM Do, YYYY")
            bookImageUrl
            socialMediaImageUrl
            tags
            description
            amazonLink
            authors {
              name
              title
            }
            endorsements {
              name
              body
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
`;

export default IndexPage;
