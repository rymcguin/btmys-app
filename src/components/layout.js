import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header.js"
import SideDrawer from "./header/sidedrawer"
import './layout.css'

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment >
      <Header siteTitle={data.site.siteMetadata.title} setOpen={setOpen} />
      <SideDrawer open={open} setOpen={setOpen} />
      <main >{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
