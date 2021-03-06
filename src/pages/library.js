import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BookCard from "../components/BOD/BookCard";

import { slugify } from "../util/utilityFunctions";


const Libarary = ({ data }) => {
  let books = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter);
  const [state, setState] = React.useState({
    books: books,
    select: "Most Recent",
  });
  const handleChange = (event) => {
    switch (event.target.value) {
      case "Most Recent":
        books = books.sort();
        break;
      case "Oldest":
        books = books.reverse();
        break;
      case "Title:A-Z":
        books = books.sort(function (a, b) {
          if (a.bookTitle < b.bookTitle) {
            return -1;
          }
          if (a.bookTitle > b.bookTitle) {
            return 1;
          }
          return 0;
        });
        break;
      case "Title:Z-A":
        books = books.sort(function (a, b) {
          if (a.bookTitle < b.bookTitle) {
            return 1;
          }
          if (a.bookTitle > b.bookTitle) {
            return -1;
          }
          return 0;
        });
        break;
      case "Author:A-Z":
        books = books.sort(function (a, b) {
          if (a.authors[0].name < b.authors[0].name) {
            return -1;
          }
          if (a.authors[0].name > b.authors[0].name) {
            return 1;
          }
          return 0;
        });
        break;
      case "Author:Z-A":
        books = books.sort(function (a, b) {
          if (a.authors[0].name < b.authors[0].name) {
            return 1;
          }
          if (a.authors[0].name > b.authors[0].name) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    setState({
      books: books,
      select: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <Layout>
        <SEO title="Libarary" />
        <FormControl
          style={{
            display: "flex",
            margin: "auto",
            marginTop: "15px",
            maxWidth: "200px",
          }}
        >
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Sort By:
          </InputLabel>
          <NativeSelect value={state.select} onChange={handleChange}>
            <option value={"Most Recent"}>Most Recent</option>
            <option value={"Oldest"}>Oldest to New</option>
            <option value={"Title:A-Z"}>Title: A-Z</option>
            <option value={"Title:Z-A"}>Title: Z-A</option>
            <option value={"Author:A-Z"}>Author: A-Z</option>
            <option value={"Author:Z-A"}>Author: Z-A</option>
          </NativeSelect>
        </FormControl>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          {state.books.map((book, i) => (
            <div key={i}>
              <BookCard book={book} path={slugify(book.bookTitle)} />
            </div>
          ))}
        </div>
      </Layout>
    </React.Fragment>
  );
};
export const data = graphql`
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
            authors {
              name
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

export default Libarary;
