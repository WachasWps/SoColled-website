import React from 'react'

import PropTypes from 'prop-types'

import './reward4.css'

const Reward4 = (props) => {
  return (
    <div className={`reward4-testimonial-card ${props.rootClassName} `}>
      <div className="reward4-container">
        <div className="reward4-container1">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="reward4-image"
          />
        </div>
        <div className="reward4-container2">
          <div className="reward4-laundary">
            <span className="reward4-laundry-txt">{props.text4}</span>
          </div>
          <div className="reward4-laundary1">
            <span className="reward4-laundry-txt1">{props.text43}</span>
          </div>
          <div className="reward4-total"></div>
        </div>
      </div>
      <div className="reward4-container3">
        <span className="reward4-laundry-txt2">{props.text431}</span>
        <button type="button" className="reward4-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Reward4.defaultProps = {
  rootClassName: '',
  text431: 'Amount-150 points',
  button: 'Claim Now',
  imageSrc: '/external/starbucks-logo-png-removebg-preview-1500h.png',
  imageAlt: 'image',
  text4: 'Starbucks Coffee',
  text43: '50% off on your first drink!',
}

Reward4.propTypes = {
  rootClassName: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text4: PropTypes.string,
  text43: PropTypes.string,
}

export default Reward4
