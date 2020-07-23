import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"
import ArrowLogo from "../images/arrow.inline.svg"
import scrollTo from 'gatsby-plugin-smoothscroll'

export const SectionWelcome = () => {

  const data =  useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "main-photo-optimized.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`)

 return (
  <section id={`welcome`} className={`first-section`}>
    <Img fluid={data.file.childImageSharp.fluid}/>
    <div role="button" tabIndex={0} className={`scroll-icon`} onClick={() => scrollTo('.about-content-container')}>
      <span className={`arrow-container`}><ArrowLogo /></span>
    </div>
  </section>
 )
}

export default SectionWelcome



