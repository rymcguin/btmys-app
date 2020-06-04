import React from "react"
import ReactGA from "react-ga"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import ShareButton from "../util/shareButton"
import { graphql } from "gatsby"
import Endorsement from "../components/BOD/Endorsement"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  body: {
    display: "flex",
    maxWidth: "500px",

    margin: "auto",
    marginTop: "10px",
    padding: "10px",
    flexDirection: "column",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  tagContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "10px 0",
    flexWrap: "wrap",
  },
}))

const SingleBook = ({ data }) => {
  const classes = useStyles()
  const book = data.markdownRemark.frontmatter
  const slug = data.markdownRemark.fields.slug
  return (
    <div>
      <React.Fragment>
        <Layout style={{ alignItems: "center" }}>
          <div className={classes.body}>
            <Typography variant="h6" color="primary">
              <a
                href={book.amazonLink}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Amazon Link",
                    action: "Title Link Clicked",
                  })
                }}
              >
                {book.bookTitle}
              </a>
            </Typography>
            <Typography variant="body1">
              by{" "}
              {book.authors.map((author, index) => {
                const numAuthors = book.authors.length
                if (index === 0) {
                  return (
                    <span key={index} style={{ fontWeight: 700 }}>
                      {author.name}
                    </span>
                  )
                } else if (index !== numAuthors - 1) {
                  return (
                    <span
                      key={index}
                      style={{ fontWeight: 700 }}
                    >{`, ${author.name}`}</span>
                  )
                } else {
                  return (
                    <span
                      key={index}
                      style={{ fontWeight: 700 }}
                    >{` & ${author.name}`}</span>
                  )
                }
              })}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "20px",
              }}
            >
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Amazon Link",
                    action: "Image Link Clicked",
                  })
                }}
              >
                <img
                  src={book.bookImageUrl}
                  alt="book cover"
                  style={{ maxWidth: "300px" }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Amazon Link",
                    action: "'Buy on Amazon' Button Clicked",
                  })
                }}
              >
                Buy on Amazon
              </Button>
              <ShareButton path={slug} />
            </div>
            <div className={classes.tagContainer}>
              <Typography
                variant="body1"
                style={{ fontWeight: 700, marginRight: "10px" }}
              >
                Tags:
              </Typography>
              {book.tags.map(tag => (
                <Chip
                  key={tag}
                  color="primary"
                  variant="outlined"
                  label={tag}
                  style={{ margin: "5px" }}
                />
              ))}
            </div>
            <a name="Description"></a>
            <div></div>
              <div>
                <Typography variant="h6" style={{ fontWeight: 700 }}>
                  Description
                </Typography>
                <Typography variant="body1">{book.description}</Typography>
              </div>
          
            <Typography
              variant="h6"
              style={{ marginTop: "10px", fontWeight: 700 }}
            >
              Notable Endorsements
            </Typography>
            <a name="Endorsements">
              <div
                id="Endorsements"
                style={{ display: "col", justifyContent: "center" }}
              >
                {book.endorsements.map((endorsement, index) => (
                  <Endorsement key={index} endorsement={endorsement} />
                ))}
              </div>
            </a>
          </div>
        </Layout>
      </React.Fragment>
    </div>
  )
}

export const data = graphql`
  query bookPostbySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        bookTitle
        date(formatString: "MM Do YYYY")
        socialMediaImageUrl
        bookImageUrl
        tags
        description
        amazonLink
        authors {
          name
          title
        }
        endorsements {
          name
          title
          body
        }
      }
      fields {
        slug
      }
    }
  }
`

export default SingleBook
