exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blog-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000000
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              path
              theme
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      // path: `/guide/${node.frontmatter.theme}${node.frontmatter.path}`,
      path: node.frontmatter.path,
      component: blogPostTemplate,
      // context: {
      //   // additional data can be passed via context
      //   // slug: `/hello/${node.frontmatter.path}`,
      //   // slug: `${node.frontmatter.theme}/${node.frontmatter.path}`,
      //   // slug: node.frontmatter.path,
      // },
    })
  })
}
