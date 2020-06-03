import React from "react";

// Mui stuff
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
}));

const BookNav = ({ books, bookId, numBooks, setbookId }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        disabled={bookId === 0}
        color="primary"
        onClick={() => setbookId(bookId - 1 )}
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