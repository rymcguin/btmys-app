import React, { useState } from "react";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

// Mui stuff
import { makeStyles } from "@material-ui/styles";
import ReplyIcon from "@material-ui/icons/Reply";

// Components
import MyButton from "./myButton";
import AlertModal from "./alertModal";

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  iconText: {
    marginLeft: "10px",
  },
}));
const getBaseUrl = () => {
	const getUrl = window.location;
	const baseUrl = getUrl.protocol + "/" + getUrl.host;
	return baseUrl;
  };

const ShareButton = ({ path }) => {
  const classes = useStyles();
  const [alertState, setAlertState] = useState({ open: false, message: "" });
  const handleLinkCopy = () => {
    copy(`${getBaseUrl()}${path}`);
    setAlertState({ open: true, message: "Link copied!" });
  };
  return (
    <React.Fragment>
      <MyButton tip="Share" variant='outlined' onClick={handleLinkCopy}>
        <div className={classes.root}>
          <ReplyIcon />
          <span className={classes.iconText}>share</span>
        </div>
      </MyButton>
      <AlertModal
        open={alertState.open}
        onClose={() => setAlertState({ open: false, message: "" })}
        message={alertState.message}
      />
    </React.Fragment>
  );
};

ShareButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ShareButton;