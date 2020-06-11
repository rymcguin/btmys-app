import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <title>About Us</title>
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          A really good book costs $10-20 and can change your life in a
          meaningful way. We want to help people find the great, life-altering
          books in this world. We scour a variety of sources to generate the
          best possible book recommendation every day.
        </Typography>
      </Box>
    </Container>
  </Layout>
)

export default AboutPage
