import React from 'react'

import PropTypes from 'prop-types'

import './reward5.css'

const Reward5 = (props) => {
  return (
    <div className={`reward5-testimonial-card ${props.rootClassName} `}>
      <div className="reward5-container">
        <div className="reward5-container1">
          <img
            src={props.imageSrc2}
            alt={props.imageAlt2}
            className="reward5-image"
          />
        </div>
        <div className="reward5-container2">
          <div className="reward5-laundary">
            <span className="reward5-laundry-txt">{props.text4}</span>
          </div>
          <div className="reward5-laundary1">
            <span className="reward5-laundry-txt1">{props.text43}</span>
          </div>
          <div className="reward5-total"></div>
        </div>
      </div>
      <div className="reward5-container3">
        <span className="reward5-laundry-txt2">{props.text431}</span>
        <button type="button" className="reward5-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Reward5.defaultProps = {
  rootClassName: '',
  text431: 'Amount-100 points',
  button: 'Claim Now',
  imageSrc: '018ce310-fe2a-4f59-b664-0713d89af467',
  imageAlt: 'image',
  text4: 'Udemy',
  text43: 'Flat 300 off on your first course!',
  imageSrc1: '57a6f337-b8ee-4661-aaa2-7333cf80b8ce',
  imageAlt1: 'image',
  imageSrc2: '/external/udemy-new-20212512-removebg-preview-200h.png',
  imageAlt2: 'image',
}

Reward5.propTypes = {
  rootClassName: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text4: PropTypes.string,
  text43: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Reward5
