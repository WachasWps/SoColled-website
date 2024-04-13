import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ChatroomCard from '../components/chatroom-card'
import Footer from '../components/footer'
import './chatroom.css'

const Chatroom = (props) => {
  return (
    <div className="chatroom-container">
      <Helmet>
        <title>Chatroom - SoCollEd</title>
        <meta property="og:title" content="Chatroom - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name13"></Header>
      <div className="chatroom-container1"></div>
      <ChatroomCard rootClassName="chatroom-card-root-class-name2"></ChatroomCard>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Chatroom
