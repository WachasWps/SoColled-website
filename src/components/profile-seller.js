import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './profile-seller.css'

const ProfileSeller = (props) => {
  return (
    <div className="profile-seller-container">
      <div className="profile-seller-container1">
        <div className="profile-seller-feature-card">
          <AppComponent rootClassName="app-component-root-class-name2"></AppComponent>
          <div className="profile-seller-container2">
            <div className="profile-seller-container3">
              <div className="profile-seller-container4">
                <h1 className="profile-seller-name">{props.heading}</h1>
              </div>
            </div>
          </div>
          <div className="profile-seller-container5">
            <button type="button" className="profile-seller-button button">
              <svg viewBox="0 0 1024 1024" className="profile-seller-icon">
                <path d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"></path>
              </svg>
              <span className="profile-seller-text">{props.text1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileSeller.defaultProps = {
  text: 'Red Flag',
  text1: 'Call Seller',
  text2: 'Chat With Seller',
  rootClassName: '',
  heading1: 'Bio',
  heading: 'Priyansh Arora',
}

ProfileSeller.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default ProfileSeller
