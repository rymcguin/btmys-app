import React from "react";
import ReactGA from "react-ga";

// Mui stuff
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

// Components
import Endorsement from "./Endorsement";
// import ShareButton from "../Util/ShareButton";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  tagContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "10px 0",
    flexWrap: "wrap",
  },
}));

const Book = ({ book }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
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
            });
          }}
        >
          {book.bookTitle}
        </a>
      </Typography>
      <Typography variant="body1">
        by{" "}
        {book.authors.map((author, index) => {
          const numAuthors = book.authors.length;
          if (index === 0) {
            return (
              <span key={index} style={{ fontWeight: 700 }}>
                {author.name}
              </span>
            );
          } else if (index !== numAuthors - 1) {
            return (
              <span
                key={index}
                style={{ fontWeight: 700 }}
              >{`, ${author.name}`}</span>
            );
          } else {
            return (
              <span
                key={index}
                style={{ fontWeight: 700 }}
              >{` & ${author.name}`}</span>
            );
          }
        })}
      </Typography>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <a
          href={book.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: "Amazon Link",
              action: "Image Link Clicked",
            });
          }}
        >
          <img
            src={book.bookImageUrl}
            alt="book cover"
            style={{ height: "400px" }}
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
            });
          }}
        >
          Buy on Amazon
        </Button>
        {/* <ShareButton path={`/book/${book.id}`} /> */}
      </div>
      <div className={classes.tagContainer}>
        <Typography
          variant="body1"
          style={{ fontWeight: 700, marginRight: "10px" }}
        >
          Tags:
        </Typography>
        {book.tags.map((tag) => (
          <Chip
            key={tag}
            color="primary"
            variant="outlined"
            label={tag}
            style={{ margin: "5px" }}
          />
        ))}
      </div>
      <Typography variant="body1">{book.description}</Typography>
      <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 700 }}>
        Notable Endorsements
      </Typography>
      {book.endorsements.map((endorsement, index) => (
        <Endorsement key={index} endorsement={endorsement} />
      ))}
    </React.Fragment>
  );
};

export default Book;