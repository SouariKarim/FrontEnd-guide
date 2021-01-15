import React from "react"
import Layout from "../../components/layout"
import Link from "gatsby-link"
import styles from "./javascript.module.css"

const Javascript = ({ data }) => (
  <Layout>
    <div className={styles.javascript}>
      <h1>Latest Posts</h1>
      <br />
      <br />
      <hr />
      <br />
      <br />
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by *** {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

// you have to filter the query using the theme mentionned in the markdowns
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            theme
          }
        }
      }
    }
  }
`

export default Javascript
