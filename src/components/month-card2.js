import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './month-card2.css'

const MonthCard2 = (props) => {
  return (
    <div className={`month-card2-testimonial-card ${props.rootClassName} `}>
      <div className="month-card2-container">
        <div className="month-card2-container1">
          <span className="month-card2-noofmonths">{props.text1211}</span>
          <span className="month-card2-months-txt">{props.text11}</span>
        </div>
        <div className="month-card2-container2">
          <div className="month-card2-laundary">
            <svg viewBox="0 0 1024 1024" className="month-card2-icon">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card2-laundry-txt">{props.text4}</span>
          </div>
          <div className="month-card2-laundary1">
            <svg viewBox="0 0 1024 1024" className="month-card2-icon2">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card2-hostel-txt">{props.text45}</span>
          </div>
          <div className="month-card2-laundary2">
            <svg viewBox="0 0 1024 1024" className="month-card2-icon4">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card2-mess-txt">{props.text44}</span>
          </div>
          <div className="month-card2-laundary3">
            <svg viewBox="0 0 1024 1024" className="month-card2-icon6">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card2-laundry-txt1">{props.text43}</span>
          </div>
          <div className="month-card2-total"></div>
        </div>
      </div>
      <div className="month-card2-container3">
        <span className="month-card2-text">{props.text}</span>
        <span className="month-card2-laundry-txt2">{props.text431}</span>
      </div>
      <Link to="/paypal" className="month-card2-navlink button">
        {props.button1}
      </Link>
    </div>
  )
}

MonthCard2.defaultProps = {
  imageAlt3: 'image',
  text45: 'Hostel Fees',
  rootClassName: '',
  text431: 'Total-₹52000!',
  button: 'Buy Now',
  text1211: '12',
  text: '_______________________________',
  button1: 'Buy now',
  text44: 'Mess Fees',
  text4: 'Laundry',
  text11: 'months',
  text43: 'Gym',
  imageSrc3: '47f57483-c9b1-4e2d-8f41-ec4b795ed9e7',
}

MonthCard2.propTypes = {
  imageAlt3: PropTypes.string,
  text45: PropTypes.string,
  rootClassName: PropTypes.string,
  text431: PropTypes.string,
  button: PropTypes.string,
  text1211: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
  text44: PropTypes.string,
  text4: PropTypes.string,
  text11: PropTypes.string,
  text43: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default MonthCard2
