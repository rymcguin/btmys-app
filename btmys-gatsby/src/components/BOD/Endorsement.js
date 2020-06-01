import React from "react";
import PropTypes from "prop-types";

// Mui stuff
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#00000",
  },
}));

const Endorsement = ({ endorsement }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2">
        {`"${endorsement.body}" - `}{" "}
        <span
          style={{ fontWeight: 700 }}
        >{`${endorsement.name}, ${endorsement.title}`}</span>
      </Typography>
    </div>
  );
};

Endorsement.propTypes = {
  endorsement: PropTypes.object.isRequired,
};

export default Endorsement;