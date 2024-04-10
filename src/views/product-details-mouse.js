import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ProfileSeller1 from '../components/profile-seller1'
import Footer from '../components/footer'
import './product-details-mouse.css'

const ProductDetailsMouse = (props) => {
  return (
    <div className="product-details-mouse-container">
      <Helmet>
        <title>Product-Details-mouse - SoCollEd</title>
        <meta property="og:title" content="Product-Details-mouse - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <div className="product-details-mouse-hero">
        <svg viewBox="0 0 1024 1024" className="product-details-mouse-icon">
          <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
        </svg>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtb3VzZXxlbnwwfHx8fDE3MTIxNzA5NjV8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
          className="product-details-mouse-image"
        />
        <svg viewBox="0 0 1024 1024" className="product-details-mouse-icon2">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </div>
      <div className="product-details-mouse-hero1">
        <div className="product-details-mouse-product-sumamry">
          <div className="product-details-mouse-details-mouse">
            <span className="product-details-mouse-text">
              <span className="product-details-mouse-text01">₹ 900</span>
              <br></br>
            </span>
            <span className="product-details-mouse-text03">
              Logitech MK220 wireless keyboard with mouse
            </span>
            <span className="product-details-mouse-text04">
              Nigdi Pradhikaran, Pune
            </span>
            <span className="product-details-mouse-text05">TODAY</span>
          </div>
          <div className="product-details-mouse-description">
            <span className="product-details-mouse-text06">
              <span className="product-details-mouse-text07">Description</span>
              <br></br>
            </span>
            <span className="product-details-mouse-text09">
              <span>
                Logitech MK220 wireless keyboard with mouseAbout this item
              </span>
              <br className="product-details-mouse-text11"></br>
              <br></br>
              <span>
                Any-surface tracking - now 8K DPI: Use MX Master 3S cordless
                computer mouse to work on any surface - even glass (1) - with
                the upgraded 8000 DPI sensor with customizable sensitivity
              </span>
              <br className="product-details-mouse-text14"></br>
              <br></br>
              <span>
                Introducing quiet clicks: MX Master 3S Bluetooth mouse
                introduces Quiet Clicks - offering the same satisfying feel but
                with 90% less click noise (2)
              </span>
              <br className="product-details-mouse-text17"></br>
              <br></br>
              <span>
                Magspeed scrolling: A computer mouse with remarkable speed,
                precision, and near silence - MagSpeed scrolling is 90% faster
                (3), 87% more precise (4), and ultra quiet
              </span>
              <br></br>
              <br></br>
              <span>
                Upgraded customization software: Customize buttons and optimize
                your workflow with App specific profiles in the improved Logi
                Options+ (5)
              </span>
              <br className="product-details-mouse-text23"></br>
              <br></br>
              <span>
                FLOW cross-computer control: Work seamlessly on multiple
                computers or laptops, and transfer text, images, and files –
                between Windows &amp; macOS (5)
              </span>
              <br className="product-details-mouse-text26"></br>
              <br></br>
              <span>
                Multi-device and multi-OS: Connect the comfort mouse with up to
                3 devices via Bl
              </span>
            </span>
          </div>
          <ProfileSeller1 rootClassName="profile-seller1-root-class-name2"></ProfileSeller1>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name13"></Footer>
    </div>
  )
}

export default ProductDetailsMouse
