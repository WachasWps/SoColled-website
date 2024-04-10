import React from 'react'

import PropTypes from 'prop-types'

import Component7 from './component7'
import './profile-seller2.css'

const ProfileSeller2 = (props) => {
  return (
    <div className={`profile-seller2-container ${props.rootClassName} `}>
      <div className="profile-seller2-container1">
        <div className="profile-seller2-feature-card">
          <Component7
            rootClassName="component7-root-class-name2"
            className=""
          ></Component7>
          <div className="profile-seller2-container2">
            <div className="profile-seller2-container3">
              <div className="profile-seller2-container4">
                <h1 className="profile-seller2-name">{props.heading}</h1>
              </div>
            </div>
          </div>
          <div className="profile-seller2-container5">
            <button type="button" className="profile-seller2-button button">
              <svg viewBox="0 0 1024 1024" className="profile-seller2-icon">
                <path
                  d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
                  className=""
                ></path>
              </svg>
              <span className="profile-seller2-text">{props.text1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileSeller2.defaultProps = {
  text2: 'Chat With Seller',
  text: 'Red Flag',
  heading: 'Priyansh Arora',
  text1: 'Call Seller',
  rootClassName: '',
  heading1: 'Bio',
}

ProfileSeller2.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default ProfileSeller2
