import React from 'react'

import { Helmet } from 'react-helmet'

import ChatroomCard from '../components/chatroom-card'
import Header from '../components/header'
import Footer from '../components/footer'
import './chatroom.css'

const Chatroom = (props) => {
  return (
    <div className="chatroom-container">
      <Helmet>
        <title>Chatroom - SoCollEd</title>
        <meta property="og:title" content="Chatroom - SoCollEd" />
      </Helmet>
      <div className="chatroom-container1">
        <ChatroomCard rootClassName="chatroom-card-root-class-name2"></ChatroomCard>
        <ChatroomCard rootClassName="chatroom-card-root-class-name"></ChatroomCard>
        <ChatroomCard rootClassName="chatroom-card-root-class-name1"></ChatroomCard>
      </div>
      <Header rootClassName="header-root-class-name13"></Header>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Chatroom
