import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import NavComp from '../components/nav-comp'
import Footer from '../components/footer'
import './navigation-map.css'

const NavigationMap = (props) => {
  return (
    <div className="navigation-map-container">
      <Helmet>
        <title>Navigation-Map - SoCollEd</title>
        <meta property="og:title" content="Navigation-Map - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <NavComp rootClassName="nav-comp-root-class-name"></NavComp>
      <Footer rootClassName="footer-root-class-name16"></Footer>
    </div>
  )
}

export default NavigationMap
