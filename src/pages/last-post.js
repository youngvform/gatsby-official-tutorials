import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function LastPost({ data }) {
  const { title, date } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <h4>
        Last Post is {title} at {date}
      </h4>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
