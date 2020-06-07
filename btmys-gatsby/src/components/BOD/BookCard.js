import React from "react"
import { Link } from "gatsby"
// Mui stuff
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
//Components
import ShareButton from "../../util/ShareButton"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "#000000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  root: {
    margin: "10px",
    display: "flex",
    height: "150px",
    width: "300px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    fontWeight: "700",
    flexDirection: "row",
    lineHeight: "18px",
    fontSize: "15px",
  },
  content: {
    display: "flex",
    padding: "15px",
    "&:last-child": {
      paddingBottom: "15px",
    },
  },
  cover: {
    height: "150px",
  },
  share: {
    display: "flex",
    justifyContent: "flex-end",
  },
}))

const BookCard = ({ book, path }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.root}>
      <img
        className={classes.cover}
        src={`${book.bookImageUrl}`}
        alt="Book cover"
      />

      <CardContent className={classes.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "180px",
          }}
        >
          <div className={classes.details}>
            <Link to={path} className={classes.link}>
              <Typography variant="body1" className={classes.title}>
                {book.bookTitle}
              </Typography>
              <Typography variant="body2">
                by{" "}
                {book.authors.map((author, index) => {
                  const numAuthors = book.authors.length
                  if (index === 0) {
                    return <span key={index}>{author.name}</span>
                  } else if (index !== numAuthors - 1) {
                    return <span key={index}>{`, ${author.name}`}</span>
                  } else {
                    return <span key={index}>{` & ${author.name}`}</span>
                  }
                })}
              </Typography>
            </Link>
          </div>
          <div className={classes.share}>
            <ShareButton path={path} variant="contained" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookCard
