import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './chatroom-card.css'

const ChatroomCard = (props) => {
  return (
    <div className={`chatroom-card-container ${props.rootClassName} `}>
      <div className="chatroom-card-feature-card">
        <AppComponent
          rootClassName="app-component-root-class-name5"
          className=""
        ></AppComponent>
        <div className="chatroom-card-container1">
          <div className="chatroom-card-container2">
            <div className="chatroom-card-container3">
              <div className="chatroom-card-container4">
                <h1 className="chatroom-card-name">{props.heading}</h1>
                <h1 className="chatroom-card-name1">{props.heading2}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ChatroomCard.defaultProps = {
  text: 'Available',
  rootClassName: '',
  heading: 'Name',
  heading22: '9847362534',
  heading2: 'College Name',
  text2: 'CONTACT DETAILS  - Sabhya Lokhande',
}

ChatroomCard.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading22: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
}

export default ChatroomCard
