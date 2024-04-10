import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBarStudyPartner from '../components/search-bar-study-partner'
import StudpartCardreqsent from '../components/studpart-cardreqsent'
import Footer from '../components/footer'
import './requests-sent.css'

const RequestsSent = (props) => {
  return (
    <div className="requests-sent-container">
      <Helmet>
        <title>Requests-Sent - SoCollEd</title>
        <meta property="og:title" content="Requests-Sent - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <SearchBarStudyPartner rootClassName="search-bar-study-partner-root-class-name3"></SearchBarStudyPartner>
      <div className="requests-sent-container1">
        <div className="requests-sent-container2">
          <Link to="/pending-requests" className="requests-sent-navlink button">
            Pending requests
          </Link>
        </div>
        <div className="requests-sent-container3">
          <Link to="/create-request" className="requests-sent-navlink1 button">
            <span>Create Request</span>
          </Link>
        </div>
        <div className="requests-sent-container4">
          <Link to="/requests-sent" className="requests-sent-navlink2 button">
            <span>Requests Sent</span>
          </Link>
          <Link to="/chatroom" className="requests-sent-navlink3 button">
            <span>
              <span>Chatroom</span>
              <br></br>
            </span>
          </Link>
        </div>
      </div>
      <div className="requests-sent-container5">
        <StudpartCardreqsent rootClassName="studpart-cardreqsent-root-class-name"></StudpartCardreqsent>
        <StudpartCardreqsent rootClassName="studpart-cardreqsent-root-class-name2"></StudpartCardreqsent>
        <StudpartCardreqsent rootClassName="studpart-cardreqsent-root-class-name1"></StudpartCardreqsent>
      </div>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default RequestsSent
