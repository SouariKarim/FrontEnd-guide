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
          {/* the path name of each .md file must be unique */}
          <Link to={`/guide/${post.frontmatter.theme}`}>Go Back</Link>
          {/* <hr /> */}
          <h1>
            {post.frontmatter.title} ---{" "}
            <small style={{ color: "#999" }}>
              {" "}
              Posted on: {post.frontmatter.date}{" "}
            </small>
          </h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000B76"
            fill-opacity="1"
            d="M0,288L15,256C30,224,60,160,90,160C120,160,150,224,180,240C210,256,240,224,270,176C300,128,330,64,360,48C390,32,420,64,450,112C480,160,510,224,540,261.3C570,299,600,309,630,293.3C660,277,690,235,720,213.3C750,192,780,192,810,170.7C840,149,870,107,900,122.7C930,139,960,213,990,234.7C1020,256,1050,224,1080,218.7C1110,213,1140,235,1170,218.7C1200,203,1230,149,1260,149.3C1290,149,1320,203,1350,202.7C1380,203,1410,149,1425,122.7L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
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
        theme
      }
    }
  }
`
