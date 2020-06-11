import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

// Mui stuff
import Typography from "@material-ui/core/Typography";

const Endorsement = ({ endorsement }) => {
  return (
    <Card
      variant="outlined"
      style={{ margin: "10px 0px ", padding: "5px 10px" }}
    >
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
