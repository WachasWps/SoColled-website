import React from 'react'

import PropTypes from 'prop-types'

import Component8 from './component8'
import './profile-seller1.css'

const ProfileSeller1 = (props) => {
  return (
    <div className={`profile-seller1-container ${props.rootClassName} `}>
      <div className="profile-seller1-container1">
        <div className="profile-seller1-feature-card">
          <Component8
            rootClassName="component8-root-class-name2"
            className=""
          ></Component8>
          <div className="profile-seller1-container2">
            <div className="profile-seller1-container3">
              <div className="profile-seller1-container4">
                <h1 className="profile-seller1-name">{props.heading}</h1>
              </div>
            </div>
          </div>
          <div className="profile-seller1-container5">
            <button type="button" className="profile-seller1-button button">
              <svg viewBox="0 0 1024 1024" className="profile-seller1-icon">
                <path
                  d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
                  className=""
                ></path>
              </svg>
              <span className="profile-seller1-text">{props.text1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileSeller1.defaultProps = {
  text: 'Red Flag',
  text1: 'Call Seller',
  text2: 'Chat With Seller',
  rootClassName: '',
  heading1: 'Bio',
  heading: 'Priyansh Arora',
}

ProfileSeller1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default ProfileSeller1
