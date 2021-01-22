import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import styles from "./styles/reset.module.scss"

const react = ({ data }) => (
  <Layout>
    <div className={styles.javascript}>
      <h1>Latest Posts</h1>
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
  query react {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { theme: { eq: "react" } } }
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
        excerpt(pruneLength: 400)
      }
    }
  }
`

export default react
