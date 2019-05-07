import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          className={className}
          fluid={
            data.allImageSharp.edges.find(element => {
              return element.node.fluid.src.split("/").pop() === src
            }).node.fluid
          }
        />
      )
    }}
  />
)

export default Image
