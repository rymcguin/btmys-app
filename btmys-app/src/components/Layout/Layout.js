import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../../Util/theme"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import SideDrawer from "./SideDrawer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="sm">
          <Box my={4}>
            <Navbar setOpen={setOpen} />
            <SideDrawer open={open} setOpen={setOpen} />
            <main>{children}</main>
            <footer style={{ marginTop: "50px" }}>
              © BooksThatMakeYouSmarter.com {new Date().getFullYear()}
            </footer>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
