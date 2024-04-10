import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBarStudyPartner from '../components/search-bar-study-partner'
import StudpartCard from '../components/studpart-card'
import Footer from '../components/footer'
import './study-partner.css'

const StudyPartner = (props) => {
  return (
    <div className="study-partner-container">
      <Helmet>
        <title>Study-Partner - SoCollEd</title>
        <meta property="og:title" content="Study-Partner - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <SearchBarStudyPartner rootClassName="search-bar-study-partner-root-class-name"></SearchBarStudyPartner>
      <div className="study-partner-container1">
        <div className="study-partner-container2">
          <Link to="/pending-requests" className="study-partner-navlink button">
            Pending requests
          </Link>
        </div>
        <div className="study-partner-container3">
          <Link to="/create-request" className="study-partner-navlink1 button">
            <span>Create Request</span>
          </Link>
        </div>
        <div className="study-partner-container4">
          <Link to="/requests-sent" className="study-partner-navlink2 button">
            <span>Requests Sent</span>
          </Link>
          <Link to="/chatroom" className="study-partner-navlink3 button">
            <span>
              <span>Chatroom</span>
              <br></br>
            </span>
          </Link>
        </div>
      </div>
      <div className="study-partner-container5">
        <h1 className="study-partner-text05">
          <span>Suggestions</span>
          <br></br>
        </h1>
        <span className="study-partner-text08">
          <span>Click Red Flag to remove from suggestion</span>
          <br></br>
        </span>
        <span className="study-partner-text11">
          <span>Click Green Flag to send request</span>
          <br></br>
        </span>
        <StudpartCard rootClassName="studpart-card-root-class-name"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name1"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name2"></StudpartCard>
        <StudpartCard rootClassName="studpart-card-root-class-name3"></StudpartCard>
      </div>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  )
}

export default StudyPartner
