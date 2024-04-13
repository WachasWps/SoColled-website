import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Plans from '../components/plans'
import CreateCustomsSub from '../components/create-customs-sub'
import Footer from '../components/footer'
import './subscription-package.css'

const SubscriptionPackage = (props) => {
  return (
    <div className="subscription-package-container">
      <Helmet>
        <title>Subscription-Package - SoCollEd</title>
        <meta property="og:title" content="Subscription-Package - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <h1 className="subscription-package-text">
        <span>General Packages</span>
        <br></br>
      </h1>
      <div className="subscription-package-container1">
        <div className="subscription-package-container2">
          <img
            alt="image"
            src="/whatsapp_image_2024-04-03_at_1.53.08_pm-removebg-preview-1100h.png"
            className="subscription-package-image"
          />
          <div className="subscription-package-container3">
            <div className="subscription-package-container4">
              <Plans rootClassName="plans-root-class-name"></Plans>
              
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/whatsapp_image_2024-04-04_at_11.06.35_pm-removebg-preview-200w.png"
        className="subscription-package-image2"
      />
      <h1 className="subscription-package-text3">
        <span>Custom Packages</span>
        <br></br>
      </h1>
      <div className="subscription-package-container5">
        <CreateCustomsSub rootClassName="create-customs-sub-root-class-name"></CreateCustomsSub>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default SubscriptionPackage
