import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import BookCard from "../components/BOD/BookCard"
import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  formControl: {
    display: "flex",
    margin: "auto",
    marginTop: "15px",

    maxWidth: "200px",
  },
  Select: {
    padding: "5px",
    "&:last-child": {
      paddingLeft: "5px",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyle()
  const [state, setState] = React.useState({
    select: "Most Recent",
  })
  const handleChange = event => {
    setState({
      select: event.target.value,
    })
  }
  switch(state.selext){
    case 'Most Recent':
      break;
    case 'Oldest':
      break;
    case 'A-Z':
      break;
    case 'Z-A':
      break;
    default:
      break;
  }
  return (
    <Layout>
      <SEO title="Libarary" />
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Sort By:
        </InputLabel>
        <NativeSelect
          value={state.select}
          onChange={handleChange}
          // inputProps={{
          //   name: "age",
          //   id: "age-native-label-placeholder",
          // }}
        >
          <option value={"Most Recent"}>Most Recent</option>
          <option value={"Oldest"}>Oldest</option>
          <option value={"A-Z"}>A-Z</option>
          <option value={"Z-A"}>Z-A</option>
        </NativeSelect>
      </FormControl>
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingTop: "10px",
              }}
            >
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key = {node.id}>
                  <BookCard
                    key={node.frontmatter.id}
                    book={node.frontmatter}
                    path={node.fields.slug}
                  />
                </div>
              ))}
            </div>
          )
        }}
      />
    </Layout>
  )
}
const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            bookID
            bookTitle
            date(formatString: "MMM Do, YYYY")
            bookImageUrl
            socialMediaImageUrl
            tags
            description
            amazonLink
            authors {
              name
              title
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
