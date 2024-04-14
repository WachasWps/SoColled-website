import React from 'react'


import { Helmet } from 'react-helmet'


import Header from '../components/header'
import Footer from '../components/footer'
import './fees.css'


const Fees = (props) => {
  return (
    <div className="fees-container">
      <Helmet>
        <title>Fees - SoCollEd</title>
        <meta property="og:title" content="Fees - SoCollEd" />
      </Helmet>
      <Header></Header>
      <div className="fees-container1">
        <span className="fees-text">Academic Fees</span>
        <span className="fees-text01">Pay </span>
        <span className="fees-text02">History</span>
        <span className="fees-text03">Dues</span>
      </div>
      <div className="fees-container2">
        <div className="fees-container3">
          <div className="fees-container4">
            <span className="fees-text04">Active Fees Plans</span>
            <span className="fees-text05">Batch Year 2022 New</span>
          </div>
          <span className="fees-text06">INR 80000</span>
          <span className="fees-text07">INR 12000</span>
          <span className="fees-text08">INR 0</span>
          <span className="fees-text09">INR 0</span>
          <span className="fees-text10">INR 1,000</span>
          <span className="fees-text11">INR 1,104</span>
          <span className="fees-text12">INR 1,154</span>
          <span className="fees-text13">University Prorata</span>
          <span className="fees-text14">Other Fees</span>
          <span className="fees-text15">Eligibility Fees</span>
          <span className="fees-text16">Tution Fees</span>
          <span className="fees-text17">Development Fees</span>
          <span className="fees-text18">Students Activities</span>
          <span className="fees-text19">Insurance Fees</span>
          <span className="fees-text20">Applicable Fees</span>
          <span className="fees-text21">Pending Amount</span>
          <span className="fees-text22">Paid Till Now</span>
          <span className="fees-text23">Total Payable</span>
          <span className="fees-text24">Paid</span>
          <span className="fees-text25">INR 0</span>
          <span className="fees-text26">INR 103258</span>
          <span className="fees-text27">INR 103258</span>
          <span className="fees-text28">
            -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
          <span className="fees-text29">
            -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
          <span className="fees-text30">
            -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </div>
        <span>Text</span>
      </div>
      <Footer rootClassName="footer-root-class-name24"></Footer>
    </div>
  )
}


export default Fees
