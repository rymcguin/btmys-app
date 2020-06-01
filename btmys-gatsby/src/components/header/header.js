import React, { useState, useEffect } from "react";
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types"

import ReactGA from "react-ga";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ siteTitle, setOpen }) => {
  const [previousUrl, setPreviousUrl] = useState("");

  useEffect(() => {
    if (previousUrl !== window.location.pathname) {
      setPreviousUrl(window.location.pathname)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [previousUrl])

  return (
    <React.Fragment>
        <AppBar position='sticky' color="inherit">
          <Toolbar>
            <IconButton edge="start" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Link href="/" style={{ textDecoration: "none", color: "unset" }}>
              {siteTitle}
            </Link>
          </Toolbar>
        </AppBar>
      {/* margin to ensure content below AppBar */}
   
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  setOpen: PropTypes.func.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
