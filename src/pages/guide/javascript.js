import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"

// import Link from "gatsby-link"
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
          <br />

          <Link to={post.frontmatter.path}>Read More</Link>
        </div>
      ))}
    </div>
  </Layout>
)

// you have to filter the query using the theme mentionned in the markdowns
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
