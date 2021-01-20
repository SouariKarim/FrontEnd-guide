import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <main className="content landing">
      <div>
        <Img
          className="content bg-image"
          style={{ zIndex: "-2" }}
          fluid={data.file.childImageSharp.fluid}
          objectFit="cover"
          fill-opacity="0.5"
          objectPosition="50% 50%"
          alt="about-image"
          backgroundColor="rgba(255,255,255,0.5)"
        />
      </div>
      <section className="inner">
        <h1>Welcome to my guide</h1>
        <p>
          This App is the entire path that i took six months ago to become a
          FrontEnd developer including all the tips and tricks and resources
          that helped me !
        </p>
        <p>Give it shot and enjoy :)</p>
        <button>
          <Link to="/guide">start now</Link>
        </button>
      </section>
    </main>
  </Layout>
)
export default IndexPage

export const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
