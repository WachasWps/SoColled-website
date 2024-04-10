import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component4 from '../components/component4'
import AddPrice from '../components/add-price'
import Footer from '../components/footer'
import './sell-product.css'

const SELLPRODUCT = (props) => {
  return (
    <div className="sellproduct-container">
      <Helmet>
        <title>SELL-PRODUCT - SoCollEd</title>
        <meta property="og:title" content="SELL-PRODUCT - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name16"></Header>
      <header data-role="Header" className="sellproduct-header"></header>
      <h1 className="sellproduct-text">POST YOUR AD</h1>
      <div className="sellproduct-hero">
        <span className="sellproduct-text1">INCLUDE SOME DETAILS</span>
        <Component4 rootClassName="component4-root-class-name1"></Component4>
        <AddPrice rootClassName="add-price-root-class-name"></AddPrice>
        <div className="sellproduct-feature-card"></div>
        <div className="sellproduct-feature-card1"></div>
        <div className="sellproduct-set-a-price">
          <input
            type="text"
            placeholder
            className="input sellproduct-textinput"
          />
          <span className="sellproduct-ad-title">Price</span>
          <span className="sellproduct-important">*</span>
        </div>
        <span className="sellproduct-text2">Upload Photos</span>
        <span className="sellproduct-text3">Set a Price</span>
        <img
          alt="pastedImage"
          src="/external/pastedimage-ivhk-500w.png"
          className="sellproduct-pasted-image"
        />
        <div className="sellproduct-feature-card2"></div>
      </div>
      <div className="sellproduct-footer"></div>
      <Footer rootClassName="footer-root-class-name17"></Footer>
    </div>
  )
}

export default SELLPRODUCT
