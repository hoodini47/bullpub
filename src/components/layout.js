import React, { useState} from 'react'
import { Helmet } from "react-helmet"

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Header from "./header"
import SectionWelcome from "./section-welcome"
import About from "./about"
import Menu from "./menu"
import Location from "./location"
import LeafletMap from "./leaflet-map"
import Footer from "./footer"

import "./layout.css"
import "../styles/styles.scss"


const Layout = () => {

  const [navActive, setNavState] = useState(false)

  const [langChosen, setLang] = useState(false)

  const [navScrolled, changeNav] = useState(false)

  useScrollPosition(({ currPos }) => {
    let firstOffsetTop = document.getElementById('about').offsetTop;
    let firstOffsetTopFormatted = (-firstOffsetTop+30);

    const isScrolled = currPos.y < firstOffsetTopFormatted
    if (isScrolled !== navScrolled) changeNav(isScrolled)
  }, [navScrolled])


  const commonProps = {
    setNavState: setNavState,
    navActive: navActive,
    navScrolled: navScrolled,
    changeNav: changeNav,
    useScrollPosition: useScrollPosition
  }

  const langProps = {
    langChosen: langChosen,
    setLang: setLang
  }

  return (
    <>
        <Helmet>

          <title>Bull Pub</title>

        </Helmet>

      <Header {...commonProps} {...langProps}/>

      <SectionWelcome />

      <About {...commonProps} {...langProps}/>

      <Menu {...langProps}/>

      <Location {...langProps} />

      <LeafletMap />

      <Footer {...langProps}/>
    </>


  )
}


export default Layout
