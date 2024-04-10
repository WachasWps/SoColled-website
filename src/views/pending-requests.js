import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBarStudyPartner from '../components/search-bar-study-partner'
import StudpartCard from '../components/studpart-card'
import Footer from '../components/footer'
import './pending-requests.css'

const PendingRequests = (props) => {
  return (
    <div className="pending-requests-container">
      <Helmet>
        <title>Pending-Requests - SoCollEd</title>
        <meta property="og:title" content="Pending-Requests - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <SearchBarStudyPartner rootClassName="search-bar-study-partner-root-class-name2"></SearchBarStudyPartner>
      <div className="pending-requests-container1">
        <div className="pending-requests-container2">
          <Link
            to="/pending-requests"
            className="pending-requests-navlink button"
          >
            Pending requests
          </Link>
        </div>
        <div className="pending-requests-container3">
          <Link
            to="/create-request"
            className="pending-requests-navlink1 button"
          >
            <span>Create Request</span>
          </Link>
        </div>
        <div className="pending-requests-container4">
          <Link
            to="/requests-sent"
            className="pending-requests-navlink2 button"
          >
            <span>Requests Sent</span>
          </Link>
          <Link to="/chatroom" className="pending-requests-navlink3 button">
            <span>
              <span>Chatroom</span>
              <br></br>
            </span>
          </Link>
        </div>
      </div>
      <div className="pending-requests-container5">
        <span className="pending-requests-text05">
          <span>Click Red Flag to remove</span>
          <br></br>
        </span>
        <span className="pending-requests-text08">
          <span>Click Green Flag to accept</span>
          <br></br>
        </span>
        <StudpartCard rootClassName="studpart-card-root-class-name4"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name5"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name6"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name7"></StudpartCard>
      </div>
      <Footer rootClassName="footer-root-class-name15"></Footer>
    </div>
  )
}

export default PendingRequests
