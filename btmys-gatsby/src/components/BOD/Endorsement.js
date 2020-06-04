import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card"

// Mui stuff
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0px ",
    padding:"5px 10px"
  },
  link: {
    textDecoration: "none",
    color: "#00000",
  },
}));

const Endorsement = ({ endorsement }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <Typography variant="body2">
        {`"${endorsement.body}" - `}{" "}
        <span
          style={{ fontWeight: 700 }}
        >{`${endorsement.name}, ${endorsement.title}`}</span>
      </Typography>
    </Card>
  );
};

Endorsement.propTypes = {
  endorsement: PropTypes.object.isRequired,
};

export default Endorsement;