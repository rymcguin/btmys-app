import React, { useState, useEffect } from "react"
import ReactGA from "react-ga"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Mui stuff
import { makeStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}))

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Navbar = ({ setOpen }) => {
  const classes = useStyles()
  const [previousUrl, setPreviousUrl] = useState("")

  useEffect(() => {
    if (previousUrl !== window.location.pathname) {
      setPreviousUrl(window.location.pathname)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [previousUrl])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="inherit">
          <Toolbar>
            <IconButton edge="start" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Link href="/" style={{ textDecoration: "none", color: "unset" }}>
              <Typography>BooksThatMakeYouSmarter.com</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* margin to ensure content below AppBar */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

Navbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
}

export default Navbar
