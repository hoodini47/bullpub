import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';
import "../styles/menu.scss"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const MenuItems = (props) => {

  const data =  useStaticQuery(graphql`

  query MenuItemsQuery {
    LangPL: allDatoCmsMenuItem(filter: {locale: {eq: "pl"}}) {
      nodes {
        position
        menuItems {
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
    LangEN: allDatoCmsMenuItem(filter: {locale: {eq: "en"}}) {
      nodes {
        position
        menuItems {
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
  }
  
  `)
  
  let allData;
  
  props.langChosen ? allData = data.LangEN : allData = data.LangPL;
  
    return (
      <div className={"menu-images-container"}>
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
                          <div key={index} className={`menu-item-container`}>
  
                          <Fade left delay={100} duration={600}>
                              <div className={`menu-item`}>
                              <Img fluid={block.menuItems.fluid} />
                              </div>
                          </Fade>
  
                          </div>
                        ))
      }
      </div>
  
    )
}

export default MenuItems
