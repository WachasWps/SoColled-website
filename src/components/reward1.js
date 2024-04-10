import React from 'react'

import PropTypes from 'prop-types'

import './reward1.css'

const Reward1 = (props) => {
  return (
    <div className={`reward1-testimonial-card ${props.rootClassName} `}>
      <div className="reward1-container">
        <div className="reward1-container1">
          <img
            src={props.imageSrc1}
            alt={props.imageAlt1}
            className="reward1-image"
          />
        </div>
        <div className="reward1-container2">
          <div className="reward1-laundary">
            <span className="reward1-laundry-txt">{props.text4}</span>
          </div>
          <div className="reward1-laundary1">
            <span className="reward1-laundry-txt1">{props.text43}</span>
          </div>
          <div className="reward1-total"></div>
        </div>
      </div>
      <div className="reward1-container3">
        <span className="reward1-laundry-txt2">{props.text431}</span>
        <button type="button" className="reward1-button button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

Reward1.defaultProps = {
  rootClassName: '',
  text: '_______________________________',
  text431: 'Amount-100 points',
  button: 'Claim Now',
  text1211: '12',
  text11: 'months',
  text4: 'Swiggy',
  text45: 'Hostel Fees',
  text44: 'Mess Fees',
  text43: '50% Off Upto $120',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  imageSrc1: '/external/swiggy_logo-removebg-preview-200h.png',
  imageAlt1: 'image',
}

Reward1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  text1211: PropTypes.string,
  text11: PropTypes.string,
  text4: PropTypes.string,
  text45: PropTypes.string,
  text44: PropTypes.string,
  text43: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Reward1
