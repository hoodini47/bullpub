import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MenuItems from "./menu-items"

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

const Menu = (props) => {

  const data =  useStaticQuery(graphql`

  query DrinkMenuHeaderQuery {
    LangPL: datoCmsMenuHeader(locale: {eq: "pl"}) {
        menuHeader
    }
    LangEN: datoCmsMenuHeader(locale: {eq: "en"}) {
        menuHeader
    }
  }
  `)

  let allData;

  props.langChosen ? allData = data.LangEN : allData = data.LangPL;
  
    return (
      <section id={`menu`}>
        
        <div className={`menu-header`}>
        <h2>
          {allData.menuHeader}
        </h2>
        </div>
  
      <MenuItems {...props} />
      </section>
  
    )
}

export default Menu
