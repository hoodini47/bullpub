import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/section-welcome.scss"
import ArrowLogo from "../images/arrow.inline.svg"
import scrollTo from 'gatsby-plugin-smoothscroll'

export const SectionWelcome = () => {

  const data =  useStaticQuery(graphql`
  query MyMainPhotoQuery {
    datoCmsMainPhoto {
      mainPhoto {
        fluid {
          src
          srcSet
          height
          width
          base64
        }
      }
    }
  }
  
`)

 return (
  <section id={`welcome`} className={`first-section`}>
    <Img fadeIn fluid={data.datoCmsMainPhoto.mainPhoto.fluid}/>
    <div role="button" tabIndex={0} className={`scroll-icon`} onClick={() => scrollTo('.about-content-container')}>
      <span className={`arrow-container`}><ArrowLogo /></span>
    </div>
  </section>
 )
}

export default SectionWelcome



