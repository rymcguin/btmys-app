import React from "react"
import { Link } from "gatsby"
// Mui stuff
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

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
  cards: {
    width: "300px",
    height: "300px",
	margin: "5px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
	justifyContent: "flex-start",

  },
  img: {
    display: "flex",
    margin: "auto",
    height: "150px",
    marginTop: "0px",
  },
  share: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
	marginRight: "5px",
	marginBottom:'5px'
  },
}))

const BookCard = ({ book, path }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.cards}>
      <Link to={path} className={classes.link}>
        <CardContent style={{padding:'15px 15px 0px 15px'}}>
          <div className={classes.content} style={{ minHeight: "225px",  }}>
            <img src={book.bookImageUrl} alt="Book" className={classes.img} />

            <Typography variant="body2" style={{fontWeight:'700'}}>{book.bookTitle}</Typography>
            <Typography variant="body2">
              by{" "}
              {book.authors.map((author, index) => {
                const numAuthors = book.authors.length
                if (index === 0) {
                  return <span key={index} >{author.name}</span>
                } else if (index !== numAuthors - 1) {
                  return <span key={index}>{`, ${author.name}`}</span>
                } else {
                  return <span key={index}>{` & ${author.name}`}</span>
                }
              })}
            </Typography>
          </div>
        </CardContent>
      </Link>
      <div className={classes.share}>
        <ShareButton path={path} variant='contained'/>
      </div>
    </Card>
  )
}

export default BookCard
