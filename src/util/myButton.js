import React from "react";
import PropTypes from "prop-types";

// Mui stuff
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const MyButton = ({ children, onClick, tip }) => {
  return (
    <Tooltip title={tip} placement="top">
      <Button
        onClick={onClick}
        variant="outlined"
        style={{ paddingLeft: "10px", maxHeight: "30px" }}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tip: PropTypes.string.isRequired,
};

export default MyButton;
