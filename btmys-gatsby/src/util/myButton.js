import React from "react";
import PropTypes from "prop-types";

// Mui stuff
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles" 

const useStyles = makeStyles (theme => ({

  button: {
    paddingLeft:'10px',
    maxHeight:'30px'
  }

}))

const MyButton = ({ children, onClick, tip, }) => {
  const classes = useStyles()
  return(
  
  <Tooltip title={tip}  placement="top">
    <Button onClick={onClick} variant='outlined' className={classes.button}>
      {children}
    </Button>
  </Tooltip>
)};

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tip: PropTypes.string.isRequired,
};

export default MyButton;