import React from "react"
import Layout from "../../components/layout"
import Link from "gatsby-link"
import styles from "../guide/styles/reset.module.scss"

const Javascript = ({ data }) => (
  <Layout>
    <div className={styles.javascript}>
      <Link
        style={{
          display: "inline-block",
          textAlign: "center",
          margin: "0 auto",
        }}
        to="/guide"
      >
        Go Back
      </Link>{" "}
      <br />
      <br />
      <hr />
      <br />
      <br />
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <h3>{post.frontmatter.title}</h3>
          <small>
            Posted by *** {post.frontmatter.author} on {post.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.frontmatter.path}>Read More</Link>
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
    allMarkdownRemark(
      filter: { frontmatter: { theme: { eq: "javascript" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          path
          author
          date
          theme
        }
      }
    }
  }
`

export default Javascript
