import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/about.scss"
import Fade from 'react-reveal/Fade';

const AboutContent = (props) => {

const data =  useStaticQuery(graphql`

query AboutQuery {
  LangPL: allDatoCmsAbout(filter: {locale: {eq: "pl"}}) {
    nodes {
      position
      aboutContent {
        ... on DatoCmsImageContent {
          id
          aboutImage {
            fluid(maxHeight: 400, maxWidth: 400) {
              src
              srcSet
              height
              width
              base64
            }
          }
        }
        ... on DatoCmsTextContent {
          id
          textAbout1
        }
      }
    }
  }
  LangEN: allDatoCmsAbout(filter: {locale: {eq: "en"}}) {
    nodes {
      position
      aboutContent {
        ... on DatoCmsImageContent {
          id
          aboutImage {
            fluid(maxHeight: 300, maxWidth: 300) {
              src
              srcSet
              height
              width
              base64
            }
          }
        }
        ... on DatoCmsTextContent {
          id
          textAbout1
        }
      }
    }
  }
}

`)

let allData;

props.langChosen ? allData = data.LangEN : allData = data.LangPL;

  return (
    <div className={"about-content-container"}>
      {
      allData.nodes.sort(
                        (a, b) => {
                        const positionA = a.position;
                        const positionB = b.position;
                        let comparision = 0;
                          if(positionA > positionB) {
                            comparision = 1;
                          } else if (positionA < positionB) {
                            comparision = -1
                          }
                          return comparision
                        }
                      )
                
                      .map((block, index) => (
                        <div key={index} className={`about-pair-container`}>

                        <Img className='about-slide-picture' fluid={block.aboutContent[0].aboutImage.fluid} />

                        <Fade bottom delay={100} duration={700}>
                            <div className={`text-up-right`}>
                              <p>{block.aboutContent[1].textAbout1}</p>
                            </div>
                        </Fade>

                        </div>
                      ))
    }
    </div>

  )
}

export default AboutContent
