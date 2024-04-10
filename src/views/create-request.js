import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import StudpartCardCreate from '../components/studpart-card-create'
import Footer from '../components/footer'
import './create-request.css'

const CreateRequest = (props) => {
  return (
    <div className="create-request-container">
      <Helmet>
        <title>Create-Request - SoCollEd</title>
        <meta property="og:title" content="Create-Request - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="create-request-container1">
        <div className="create-request-container2">
          <Link
            to="/pending-requests"
            className="create-request-navlink button"
          >
            Pending requests
          </Link>
        </div>
        <div className="create-request-container3">
          <Link to="/create-request" className="create-request-navlink1 button">
            <span>Create Request</span>
          </Link>
        </div>
        <div className="create-request-container4">
          <Link to="/requests-sent" className="create-request-navlink2 button">
            <span>Requests Sent</span>
          </Link>
          <Link to="/chatroom" className="create-request-navlink3 button">
            <span>
              <span>Chatroom</span>
              <br></br>
            </span>
          </Link>
        </div>
      </div>
      <StudpartCardCreate rootClassName="studpart-card-create-root-class-name"></StudpartCardCreate>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default CreateRequest
