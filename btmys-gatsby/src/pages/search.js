import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchBox from '../components/Search/SearchBox'

const SearchPage = () => {
  
  return (
    <Layout>
      <SEO title="Search" />
      <SearchBox />
      
    </Layout>
  )
}

export default SearchPage
