import React from "react"
import "../styles/desktop-header.scss"
import { FaFacebook } from 'react-icons/fa';
import TripAdvisorLogo from "../images/tripadvisor.inline.svg"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const DesktopHeader = (props) => {

  const data =  useStaticQuery(graphql`
  query MyLogoQuery {
    file(relativePath: {eq: "bullpub-logo.png"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  
`)

  return (
  <>

  <header className={`desktop-header ${props.navScrolled ? "sticky-header-show" : ""}`}>

  <div id={`bullpub-mini-logo`} onClick={() => {
                            props.scrollTo('#welcome');
                            props.setNavState(false)
                            }
                          }>
  <Img fixed={data.file.childImageSharp.fixed}/>
  </div>

  <nav className={`desktop-main-nav`}>
    <ul id="nav-items-list">
        <li>
          <a onClick={() => {
                            props.scrollTo('#welcome');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.home : props.data.LangPL.home}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#about');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.about : props.data.LangPL.about}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#menu');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.menu : props.data.LangPL.menu}</a>
        </li>
        <li>
          <a onClick={() => {
                            props.scrollTo('#location');
                            props.setNavState(false)
                            }
                            }
                            className={`${props.langChosen ? "english" : "polish"}`}
                            >
                            {props.langChosen ? props.data.LangEN.location : props.data.LangPL.location}</a>
        </li>
    </ul>
  </nav>

    <nav className={`desktop-side-nav`}>
      <ul id="nav-side-list">
        <li>
          <a onClick={() => props.setLang(false)} className={`${props.langChosen ? "" : "lang-clicked"}`} >PL</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a onClick={() =>  props.setLang(true)} className={`${props.langChosen ? "lang-clicked" : ""}`} >EN</a>
        </li>
      </ul>

      <div id="social-media-icons">
          <a href="https://pl.tripadvisor.com/Restaurant_Review-g274772-d1123070-Reviews-Bull_Pub-Krakow_Lesser_Poland_Province_Southern_Poland.html">
          <TripAdvisorLogo />
          </a>
          <a href="https://www.facebook.com/bullpubcracow/">
            <FaFacebook />
          </a>
      </div>
    </nav>


  </header>
  </>
  )
}


export default DesktopHeader
