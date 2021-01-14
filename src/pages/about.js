import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "./about.css"

const About = ({ data }) => {
  return (
    <Layout>
      <main className="content  inner-text">
        <section className="about">
          <article className="about-text">
            <h2>About</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              dignissimos. Aperiam pariatur at et reprehenderit molestias
              adipisci. Ex commodi minus, sint dolorum sunt in, necessitatibus,
              doloribus corrupti modi odit praesentium reprehenderit iusto
              dignissimos incidunt consectetur id quasi obcaecati quaerat
              possimus aliquid magni accusantium odio perferendis?
              Exercitationem quam unde ullam sequi.
            </p>
          </article>
          <div className="about-image">
            <Img
              style={{
                borderRadius: "60px 0 20px 0",
                zIndex: "2",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                // objectFit: "none",
                // objectPosition: "10px 20px",
              }}
              fluid={data.hero.childImageSharp.fluid}
              objectFit="cover"
              opacity="0.2"
              objectPosition="90% 50%"
              alt="about-image"
            />
          </div>
        </section>
        <section className="about">
          <div className="about-image">
            <Img
              style={{
                borderRadius: "50%",
                textAlign: "center",
                maxWidth: "500px",
                maxHeight: "500px",
                // borderRadius: "50%",
                zIndex: "2",
                margin: "0 auto",
                objectPosition: "10px 20px",
              }}
              fluid={data.heroTwo.childImageSharp.fluid}
              // borderRadius="50%"
              objectFit="none"
              opacity="0.9"
              objectPosition="20% 20%"
              alt="about-image"
            />
          </div>
          <article className="about-text">
            <h2>About</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              dignissimos. Aperiam pariatur at et reprehenderit molestias
              adipisci. Ex commodi minus, sint dolorum sunt in, necessitatibus,
              doloribus corrupti modi odit praesentium reprehenderit iusto
              dignissimos incidunt consectetur id quasi obcaecati quaerat
              possimus aliquid magni accusantium odio perferendis?
              Exercitationem quam unde ullam sequi.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    hero: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroTwo: file(relativePath: { eq: "karim.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
