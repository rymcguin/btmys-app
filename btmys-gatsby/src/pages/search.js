import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <input type='text' placeholder="Enter Keyword"/>
	<button>Search</button>
  </Layout>
)

export default SearchPage
