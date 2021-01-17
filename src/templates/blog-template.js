import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Link from "gatsby-link"
import "./template.scss"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="template">
        <section className="template-content">
          <Link to="/guide">Go Back</Link>
          {/* <hr /> */}
          <h1>
            {post.frontmatter.title} <small> {post.frontmatter.date} </small>{" "}
          </h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>{" "}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
