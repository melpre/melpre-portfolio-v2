// This file will run on Node during build time. It tells Gatsby
// to fetch project data that will then get pumped into the
// project-details template to generate a page

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}


