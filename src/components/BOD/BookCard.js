import React from "react";

// Mui stuff
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//Components
import ShareButton from "../../util/shareButton";

const BookCard = ({ book, path }) => {
  return (
    <Card
      variant="outlined"
      style={{
        margin: "10px",
        display: "flex",
        height: "150px",
        width: "300px",
      }}
    >
      <a
        href={path}
        style={{
          textDecoration: "none",
          color: "#000000",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <img
          style={{ height: "150px", width: "100px" }}
          src={`${book.bookImageUrl}`}
          alt="Book cover"
        />
      </a>

      <CardContent
        style={{
          display: "flex",
          padding: "15px",
          "&:last-child": {
            paddingBottom: "15px",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "180px",
          }}
        >
          <a
            href={path}
            style={{
              textDecoration: "none",
              color: "#000000",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  display: "flex",
                  fontWeight: "700",
                  flexDirection: "row",
                  lineHeight: "18px",
                  fontSize: "15px",
                }}
              >
                {book.bookTitle}
              </Typography>
              <Typography variant="body2">
                by{" "}
                {book.authors.map((author, index) => {
                  const numAuthors = book.authors.length;
                  if (index === 0) {
                    return <span key={index}>{author.name}</span>;
                  } else if (index !== numAuthors - 1) {
                    return <span key={index}>{`, ${author.name}`}</span>;
                  } else {
                    return <span key={index}>{` & ${author.name}`}</span>;
                  }
                })}
              </Typography>
            </div>
          </a>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ShareButton path={`/${path}`} variant="contained" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
