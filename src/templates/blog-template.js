import React from "react"
import Layout from "../components/Layout"
import Link from "gatsby-link"
import "./template.css"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="template">
        {" "}
        <Link to="/guide">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
