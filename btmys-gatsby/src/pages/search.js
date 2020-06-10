import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import SearchBox from '../components/Search/SearchBox'

// export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })



const SearchPage = () => {
  
  return (
    <Layout>
      <SEO title="Search" />
      {/* <SearchBox search={seach}/> */}
      
    </Layout>
  )
}

export default SearchPage
