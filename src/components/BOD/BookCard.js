import React from "react";

// Mui stuff
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//Components
import Button from "@material-ui/core/Button";

const BookCard = ({ book, path }) => {
  let baseURL = "https://www.booksthatmakeyousmarter.com/";
  if (typeof window !== "undefined") {
    baseURL = `${window.location.origin}/`;
  }
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
        href={`${baseURL}/${path}`}
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
          padding:'15px 15px 5px',
          "&:lastChild": {
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
            href={`${baseURL}/${path}`}
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
            <Button
              href={`${baseURL}/${path}`}
              variant="outlined"
              style={{ fontSize: "12px", padding: "2px 8px" }}
            >
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
