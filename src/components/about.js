import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/about.scss"
import AboutContent from "./about-content"


const About = (props) => {

const data =  useStaticQuery(graphql`

query AboutHeaderQuery {
  LangPL: datoCmsAboutHeader(locale: {eq: "pl"}) {
      aboutHeader
      aboutSlogan
  }
  LangEN: datoCmsAboutHeader(locale: {eq: "en"}) {
      aboutHeader
      aboutSlogan
  }
}
`)



let allData;

props.langChosen ? allData = data.LangEN : allData = data.LangPL;

  return (
    <section id={`about`}>
      
      <div className={`about-header`}>
      <h4>
        {allData.aboutSlogan}
      </h4>
      <h2>
        {allData.aboutHeader}
      </h2>
      </div>
     
     <AboutContent {...props} />

    </section>

  )
}

export default About
