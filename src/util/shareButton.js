import React, { useState } from "react";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

// Mui stuff
import ReplyIcon from "@material-ui/icons/Reply";

// Components
import MyButton from "./myButton";
import AlertModal from "./alertModal";

const getBaseUrl = () => {
  const getUrl = window.location;
  const baseUrl = getUrl.protocol + "/" + getUrl.host;
  return baseUrl;
};

const ShareButton = ({ path }) => {
  const [alertState, setAlertState] = useState({ open: false, message: "" });
  const handleLinkCopy = () => {
    copy(`${getBaseUrl()}${path}`);
    setAlertState({ open: true, message: "Link copied!" });
  };
  return (
    <React.Fragment>
      <MyButton tip="Share" variant="outlined" onClick={handleLinkCopy}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReplyIcon />
          <span style={{ marginLeft: "10px" }}>share</span>
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
