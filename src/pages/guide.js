import React from "react"
import { graphql, Link } from "gatsby"

import "./guide.css"
import Layout from "../components/layout"

const Guide = () => {
  return (
    <Layout>
      <main className="guide">
        <section className="search">
          <input type="text" />
          <button> Search </button>
        </section>
        <div>
          <Link to="/info/javascript">javascript</Link>
        </div>
        <section className="guide-content"></section>
      </main>
    </Layout>
  )
}

export default Guide
