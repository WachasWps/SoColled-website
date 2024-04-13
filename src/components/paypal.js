import React from 'react'

import { Helmet } from 'react-helmet'

import './paypal.css'

const Paypal = (props) => {
  return (
    <div className="paypal-container">
      <Helmet>
        <title>paypal - SoCollEd</title>
        <meta property="og:title" content="paypal - SoCollEd" />
      </Helmet>
      <div className="paypal-container01">
        <div className="paypal-container02">
          <span className="paypal-text">Payment</span>
        </div>
        <div className="paypal-container03">
          <div className="paypal-container04"></div>
          <div className="paypal-container05">
            <div className="paypal-container06">
              <div className="paypal-container07">
                <span className="paypal-text01">Hostel name:</span>
                <svg viewBox="0 0 1024 1024" className="paypal-icon">
                  <path d="M426 128h556v768h-256v-170h84v-86h-84v-86h84v-84h-84v-78l-86-58v-36h-54q-68-44-160-106v-64zM348 244l292 194v458h-214v-342h-170v342h-214v-448z"></path>
                </svg>
              </div>
              <div className="paypal-container08">
                <span className="paypal-text02">Text</span>
              </div>
              <span className="paypal-text03">Hostel amount:</span>
              <div className="paypal-container09">
                <span className="paypal-text04">Text</span>
              </div>
            </div>
            <div className="paypal-container10">
              <div className="paypal-container11">
                <span className="paypal-text05">Laundry name:</span>
                <svg viewBox="0 0 1024 1024" className="paypal-icon2">
                  <path d="M512 854q106 0 181-75t75-181-75-181-181-75-181 75-75 181 75 181 181 75zM298 170q-18 0-30 13t-12 31 12 30 30 12 31-12 13-30-13-31-31-13zM426 170q-18 0-30 13t-12 31 12 30 30 12 31-12 13-30-13-31-31-13zM768 86q36 0 61 24t25 60v684q0 36-25 60t-61 24h-512q-36 0-61-24t-25-60v-684q0-36 25-60t61-24h512zM392 718l240-242q50 50 50 122 0 70-50 120t-120 50-120-50z"></path>
                </svg>
              </div>
              <div className="paypal-container12">
                <span className="paypal-text06">Text</span>
              </div>
              <span className="paypal-text07">Laundry amount:</span>
              <div className="paypal-container13">
                <span className="paypal-text08">Text</span>
              </div>
            </div>
            <div className="paypal-container14">
              <div className="paypal-container15">
                <span className="paypal-text09">Mess name:</span>
                <svg viewBox="0 0 1024 1024" className="paypal-icon4">
                  <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
                </svg>
              </div>
              <div className="paypal-container16">
                <span className="paypal-text10">Text</span>
              </div>
              <span className="paypal-text11">Mess amount:</span>
              <div className="paypal-container17">
                <span className="paypal-text12">Text</span>
              </div>
            </div>
            <div className="paypal-container18">
              <div className="paypal-container19">
                <span className="paypal-text13">Gym name:</span>
                <svg viewBox="0 0 1024 1024" className="paypal-icon6">
                  <path d="M878 634l60 62-90 90 60 62-60 60-62-60-90 90-62-60-60 60-62-60 152-152-366-366-152 152-60-62 60-60-60-62 90-90-60-62 60-60 62 60 90-90 62 60 60-60 62 60-152 152 366 366 152-152 60 62z"></path>
                </svg>
              </div>
              <div className="paypal-container20">
                <span className="paypal-text14">Text</span>
              </div>
              <span className="paypal-text15">Gym amount:</span>
              <div className="paypal-container21">
                <span className="paypal-text16">Text</span>
              </div>
            </div>
          </div>
        </div>
        <div className="paypal-container22">
          <span className="paypal-text17">Buy Now</span>
        </div>
      </div>
    </div>
  )
}

export default Paypal
