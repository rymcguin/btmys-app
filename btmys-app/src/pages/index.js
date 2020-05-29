import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

// Mui stuff
import Typography from "@material-ui/core/Typography"

const IndexPage = () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom>
      Book of the Day
    </Typography>
  </Layout>
)

export default IndexPage
