import React from 'react'

import PropTypes from 'prop-types'

import './chatroom-card.css'

const ChatroomCard = (props) => {
  return (
    <div className={`chatroom-card-container ${props.rootClassName} `}>
      <div className="chatroom-card-feature-card">
        <div className="chatroom-card-container1">
          <div className="chatroom-card-container2">
            <img
              alt="image"
              src="https://cdn2.iconfinder.com/data/icons/leto-blue-ui-generic-1/64/ui_-04-512.png"
              className="chatroom-card-image"
            />
          </div>
          <span className="chatroom-card-text">{props.text8}</span>
        </div>
        <div className="chatroom-card-container3">
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="chatroom-card-textinput input"
          />
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="chatroom-card-icon"
          >
            <path
              d="M648 614.286c-28.571 92-112.571 153.714-209.143 153.714s-180.571-61.714-209.143-153.714c-6.286-19.429 4.571-39.429 24-45.714 18.857-6.286 39.429 4.571 45.714 24 18.857 61.143 75.429 102.286 139.429 102.286s120.571-41.143 139.429-102.286c6.286-19.429 26.857-30.286 46.286-24 18.857 6.286 29.714 26.286 23.429 45.714zM365.714 365.714c0 40.571-32.571 73.143-73.143 73.143s-73.143-32.571-73.143-73.143 32.571-73.143 73.143-73.143 73.143 32.571 73.143 73.143zM658.286 365.714c0 40.571-32.571 73.143-73.143 73.143s-73.143-32.571-73.143-73.143 32.571-73.143 73.143-73.143 73.143 32.571 73.143 73.143zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="chatroom-card-icon2">
            <path
              d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="chatroom-card-icon4">
            <path
              d="M86 896v-298l640-86-640-86v-298l896 384z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

ChatroomCard.defaultProps = {
  text81: 'Sabhya.',
  text6: 'Type...',
  rootClassName: '',
  text8: 'Sabhya',
  text3: 'Wachas',
  textinputPlaceholder: 'Write a Message',
  rootClassName1: '',
  heading: 'Wachas',
  heading2: 'Type...',
}

ChatroomCard.propTypes = {
  text81: PropTypes.string,
  text6: PropTypes.string,
  rootClassName: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  rootClassName1: PropTypes.string,
  heading: PropTypes.string,
  heading2: PropTypes.string,
}

export default ChatroomCard
