import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

// Mui stuff
import Typography from "@material-ui/core/Typography"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Typography variant="h4" component="h1" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" gutterBottom>
      A really good book costs $10-20 and can change your life in a meaningful
      way. We want to help people find the great, life-altering books in this
      world. We scour a variety of sources to generate the best possible book
      recommendation every day.
    </Typography>
  </Layout>
)

export default SecondPage
