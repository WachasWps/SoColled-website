import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './month-card1.css'

const MonthCard1 = (props) => {
  return (
    <div className={`month-card1-testimonial-card ${props.rootClassName} `}>
      <div className="month-card1-container">
        <div className="month-card1-container1">
          <span className="month-card1-noofmonths">{props.text1211}</span>
          <span className="month-card1-months-txt">{props.text11}</span>
        </div>
        <div className="month-card1-container2">
          <div className="month-card1-laundary">
            <svg viewBox="0 0 1024 1024" className="month-card1-icon">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card1-laundry-txt">{props.text4}</span>
          </div>
          <div className="month-card1-laundary1">
            <svg viewBox="0 0 1024 1024" className="month-card1-icon2">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card1-hostel-txt">{props.text45}</span>
          </div>
          <div className="month-card1-laundary2">
            <svg viewBox="0 0 1024 1024" className="month-card1-icon4">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
                className=""
              ></path>
            </svg>
            <span className="month-card1-mess-txt">{props.text44}</span>
          </div>
        </div>
      </div>
      <div className="month-card1-container3">
        <span className="month-card1-text">{props.text}</span>
        <span className="month-card1-laundry-txt1">{props.text431}</span>
      </div>
      <Link to="Paypal" className="month-card1-navlink button">
        {props.button}
      </Link>
    </div>
  )
}

MonthCard1.defaultProps = {
  button: 'Buy Now',
  text45: 'Hostel Fees',
  text: '_________________________________',
  imageAlt3: 'image',
  imageSrc3: '47f57483-c9b1-4e2d-8f41-ec4b795ed9e7',
  text1211: '1',
  text431: 'Total-₹6500!',
  rootClassName: '',
  text4: 'Laundry',
  text43: 'Gym',
  text11: 'month',
  text44: 'Mess Fees',
}

MonthCard1.propTypes = {
  button: PropTypes.string,
  text45: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc3: PropTypes.string,
  text1211: PropTypes.string,
  text431: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text43: PropTypes.string,
  text11: PropTypes.string,
  text44: PropTypes.string,
}

export default MonthCard1
