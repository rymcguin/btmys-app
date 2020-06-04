const {slugify} = require('./src/util/utilityFunctions');
const path = require('path')

exports.onCreateNode = ({node, actions }) => {
	const {createNodeField} = actions
	if(node.internal.type === 'MarkdownRemark'){
		const slugFromTitle = slugify(node.frontmatter.bookTitle)
		createNodeField({
			node,
			name: 'slug',
			value: slugFromTitle
		})
	}
}

exports.createPages = ({actions, graphql}) =>{
	const {createPage} = actions;
	const singleBook = path.resolve('src/templates/singleBook.js')
	//const singleAuthor = path.resolve('src/templates/singleAuthor.js')

	return graphql(`
	{
	allMarkdownRemark{
		edges {
		  node {
			frontmatter{
				bookTitle
				bookID
				tags
			}
			fields{
				slug
			}
		}
		}
	}
	}
	
	`).then(res=>{
		if(res.errors) return Promise.reject(res.errors)

		const books = res.data.allMarkdownRemark.edges

		books.forEach(({node}) => {
			createPage({
				path:node.fields.slug,
				component:singleBook,
				context:{
					slug:node.fields.slug
				}
			})
		});
	})
}