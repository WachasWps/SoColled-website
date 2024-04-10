import React from 'react'

import PropTypes from 'prop-types'

import './reward3.css'

const Reward3 = (props) => {
  return (
    <div className={`reward3-testimonial-card ${props.rootClassName} `}>
      <div className="reward3-container">
        <div className="reward3-container1">
          <img
            src={props.imageSrc2}
            alt={props.imageAlt2}
            className="reward3-image"
          />
        </div>
        <div className="reward3-container2">
          <div className="reward3-laundary">
            <span className="reward3-laundry-txt">{props.text4}</span>
          </div>
          <div className="reward3-laundary1">
            <span className="reward3-laundry-txt1">{props.text43}</span>
          </div>
          <div className="reward3-total"></div>
        </div>
      </div>
      <div className="reward3-container3">
        <span className="reward3-laundry-txt2">{props.text431}</span>
        <button type="button" className="reward3-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Reward3.defaultProps = {
  rootClassName: '',
  text431: 'Amount-150 points',
  button: 'Claim Now',
  imageSrc1: '3ed23a8d-3d6e-43f8-ba40-de6d5d0feb71',
  imageAlt1: 'image',
  text4: 'Cafe Peter',
  text43: 'Free Pancakes on your next order!',
  imageSrc: '018ce310-fe2a-4f59-b664-0713d89af467',
  imageAlt: 'image',
  imageSrc2: '/external/images-removebg-preview-200h.png',
  imageAlt2: 'image',
}

Reward3.propTypes = {
  rootClassName: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  text4: PropTypes.string,
  text43: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Reward3
