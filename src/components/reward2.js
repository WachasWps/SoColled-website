import React from 'react'

import PropTypes from 'prop-types'

import './reward2.css'

const Reward2 = (props) => {
  return (
    <div className={`reward2-testimonial-card ${props.rootClassName} `}>
      <div className="reward2-container">
        <div className="reward2-container1">
          <img
            src={props.imageSrc1}
            alt={props.imageAlt1}
            className="reward2-image"
          />
        </div>
        <div className="reward2-container2">
          <div className="reward2-laundary">
            <span className="reward2-laundry-txt">{props.text4}</span>
          </div>
          <div className="reward2-laundary1">
            <span className="reward2-laundry-txt1">{props.text43}</span>
          </div>
          <div className="reward2-total"></div>
        </div>
      </div>
      <div className="reward2-container3">
        <span className="reward2-laundry-txt2">{props.text431}</span>
        <button type="button" className="reward2-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Reward2.defaultProps = {
  rootClassName: '',
  text431: 'Amount-75points',
  button: 'Claim Now',
  imageSrc1: '/external/swiggy_logo-removebg-preview-200h.png',
  imageAlt1: 'image',
  text4: 'Swiggy',
  text43: '40% Off Upto $80',
}

Reward2.propTypes = {
  rootClassName: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  text4: PropTypes.string,
  text43: PropTypes.string,
}

export default Reward2
