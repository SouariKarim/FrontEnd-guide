import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "./contact.css"

const Contact = ({ data }) => {
  const { publicURL } = data.contact
  return (
    <Layout>
      <main className="main">
        <div className="contact-form">
          <div className="title">
            <h2 style={{ fontSize: "28px" }}>contact me </h2>
          </div>
          <form action="https://formspree.io/f/xpzokrrq" method="POST">
            <div>
              <label htmlFor="name">Full name:</label> <br />
              <input type="text" name="name" />
            </div>{" "}
            <hr />
            <div>
              <label htmlFor="email">Email:</label> <br />
              <input type="email" name="_replyto" />
            </div>{" "}
            <hr />
            <div>
              <label htmlFor="message">Message:</label> <br />
              <textarea
                style={{
                  width: "100%",
                  height: "300px",
                  maxWidth: "500px",
                  maxHeight: "400px",
                }}
                name="message"
                rows="5"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <button type="submit" className="button special">
                  Send
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="social-form">
          {/* <h1>hello there</h1> */}
          {/* <Img
            style={{
              opacity: "0.8",
            }}
            fluid={data.contact.childImageSharp.fluid}
            width="100%"
            objectFit="cover"
            opacity="0.8"
            objectPosition="50% 50%"
            alt="about-image"
          /> */}
          <img src={publicURL} alt="hello there" />
        </div>
      </main>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  {
    contact: file(relativePath: { eq: "contact.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      publicURL
      relativePath
    }
  }
`
