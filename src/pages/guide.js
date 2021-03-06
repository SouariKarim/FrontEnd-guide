import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import themes from "./theme"
import "./guide.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/GuideBackground"

const Guide = ({ data }) => {
  return (
    <Layout>
      <SEO title="Guide" />
      <StyledBackgroundSection>
        <main className="guide">
          {/* <section className="search">
          <input type="text" />
          <button> Search </button>
        </section> */}

          <section className="guide-content">
            {themes.map((topic, index) => {
              return (
                <div key={index} className="content-card">
                  <Link to={`/guide/${topic.theme}`}>
                    {/* <img src={require(`${topic.theme}`)} alt="javascript logo" /> */}
                    <img
                      src={require(`../images/themes/${topic.theme}.png`)}
                      alt={`${topic.theme} logo`}
                      // style={{ width: "50px", height: "50px" }}
                    />{" "}
                    {/* <small>{topic.theme}</small> */}
                    <h2>{topic.theme}</h2>
                    <p>{topic.description}</p>
                  </Link>
                </div>
              )
            })}
          </section>
        </main>
      </StyledBackgroundSection>
    </Layout>
  )
}

export default Guide

// const guideQuery = graphql`
// allImageSharp {
//   nodes {
//     fixed(width: 50) {
//      ...GatsbyContentfulFixed
//    }
//  }
// }

// `
