import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './month-card.css'

const MonthCard = (props) => {
  return (
    <div className={`month-card-testimonial-card ${props.rootClassName} `}>
      <div className="month-card-container">
        <div className="month-card-container1">
          <span className="month-card-noofmonths">{props.text1211}</span>
          <span className="month-card-months-txt">{props.text11}</span>
        </div>
        <div className="month-card-container2">
          <div className="month-card-laundary">
            <svg viewBox="0 0 1024 1024" className="month-card-icon">
              <path d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"></path>
            </svg>
            <span className="month-card-laundry-txt">{props.text4}</span>
          </div>
          <div className="month-card-laundary1">
            <svg viewBox="0 0 1024 1024" className="month-card-icon2">
              <path d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"></path>
            </svg>
            <span className="month-card-hostel-txt">{props.text45}</span>
          </div>
          <div className="month-card-laundary2">
            <svg viewBox="0 0 1024 1024" className="month-card-icon4">
              <path d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"></path>
            </svg>
            <span className="month-card-mess-txt">{props.text44}</span>
          </div>
          <div className="month-card-laundary3"></div>
          <div className="month-card-total"></div>
        </div>
      </div>
      <div className="month-card-container3">
        <span className="month-card-text">{props.text7}</span>
        <span className="month-card-laundry-txt1">{props.text431}</span>
      </div>
      <button type="button" className="month-card-button button">
        {props.button}
      </button>
      <Link to="/" className="month-card-button button">
              {props.button}
            </Link>
    </div>
  )
}

MonthCard.defaultProps = {
  text42: 'Hostel',
  text7: '________________________________',
  text3: 'Mess Fees',
  imageSrc4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pictureAlt: 'profile',
  text43: 'Gym',
  name: 'Jane Doe',
  text1: '3',
  text431: 'Total-$15000',
  imageAlt3: 'image',
  text45: 'Hostel Fees',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  role: '3',
  text5: 'Total-',
  imageAlt1: 'image',
  button: 'Pay Now',
  text111: 'months',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  text1211: '3',
  text44: 'Mess Fees',
  text4311: '$9500!',
  text121: '3',
  text12111: '3',
  text11: 'months',
  imageAlt: 'image',
  imageSrc3: '47f57483-c9b1-4e2d-8f41-ec4b795ed9e7',
  imageAlt2: 'image',
  imageAlt4: 'image',
  text: '7200',
  text4: 'Laundry',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text41: 'Gym',
  text2: 'Hostel Fees',
  pictureSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200',
  text12: '3',
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text6: '$9500!',
}

MonthCard.propTypes = {
  text42: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
  imageSrc4: PropTypes.string,
  pictureAlt: PropTypes.string,
  text43: PropTypes.string,
  name: PropTypes.string,
  text1: PropTypes.string,
  text431: PropTypes.string,
  imageAlt3: PropTypes.string,
  text45: PropTypes.string,
  imageSrc2: PropTypes.string,
  role: PropTypes.string,
  text5: PropTypes.string,
  imageAlt1: PropTypes.string,
  button: PropTypes.string,
  text111: PropTypes.string,
  quote: PropTypes.string,
  text1211: PropTypes.string,
  text44: PropTypes.string,
  text4311: PropTypes.string,
  text121: PropTypes.string,
  text12111: PropTypes.string,
  text11: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt4: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  imageSrc1: PropTypes.string,
  text41: PropTypes.string,
  text2: PropTypes.string,
  pictureSrc: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text6: PropTypes.string,
}

export default MonthCard
