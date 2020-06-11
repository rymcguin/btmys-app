import React from "react";

// Mui stuff

import Button from "@material-ui/core/Button";

const BookNav = ({ bookId, numBooks, setbookId, books }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "15px 0",
      }}
    >
      <Button
        variant="contained"
        disabled={bookId === 0}
        color="primary"
        onClick={() => setbookId(bookId - 1)}
        size="small"
      >
        Prev
      </Button>
      <Button
        variant="contained"
        disabled={bookId === numBooks}
        color="primary"
        onClick={() => setbookId(bookId + 1)}
        size="small"
      >
        Next
      </Button>
    </div>
  );
};

export default BookNav;
