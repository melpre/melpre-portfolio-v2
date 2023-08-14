import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  // console.log(data);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Web Development</h2>
          <h3>Imagining and Creating</h3>
          <p>Fullstack web developer based in Los Angeles.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* Use this component for static image queries */}
        <GatsbyImage image={data.file.childrenImageSharp[0].gatsbyImageData} alt="site banner" />
      </section>
    </Layout>
  )
}

// Updated graphql changes! 8/9/2023
// layout "constrained" is new responsive argument for resolver
export const query = graphql`
  query Banner {
    file(relativePath: {eq: "me_bitmoji.png"}) {
      childrenImageSharp {
        gatsbyImageData(layout: CONSTRAINED) 
      }
    }
  }
`

// Do not use this to query graphql, it is deprecated.
// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         fluid {
//              ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `



