import React from "react"
import Link from "@material-ui/core/Link"
import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Typography } from "@material-ui/core"

const Header = ({ siteTitle, setOpen }) => {
  return (
    <React.Fragment>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ color: "unset" }}>
            <Typography>{siteTitle}</Typography>
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
