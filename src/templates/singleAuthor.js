// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import { Typography } from "@material-ui/core"

// const SingleAuthor = ({ data, books}) => {
//   const author = data.markdownRemark.frontmatter.authors
//   return (
//     <Layout>
//       <Card>
//         <img src={author.profileImageUrl} alt="Profile Image" />
//         <Typography variant="h4"> {author.name} </Typography>
//         <Typography variant="h6"> {author.bio} </Typography>
//       </Card>
//       <Card>
//         <Typography>`Books by ${author.name}: `</Typography>
// 		{(author.personID === {books.authors.personID}) 
// 		? books.map(books=><div>{books.bookTitle}</div>)
// 		:
// 		<div>No Books</div>
// 		}
//       </Card>
//     </Layout>
//   )
// }

// const data = graphql`
//   query authorPagebySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         bookTitle
//         bookImageUrl
//         tags
//         description
//         amazonLink
//         authors {
//           personID
//           name
//           profileImageUrl
//           bio
//           title
//         }
//         endorsements {
//           personID
//           name
//           title
//           body
//         }
//       }
//       fields {
//         slug
//       }
//     }
//   }
// `
