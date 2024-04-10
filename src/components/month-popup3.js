import React from 'react'

import PropTypes from 'prop-types'

import './month-popup3.css'

const MonthPopup3 = (props) => {
  return (
    <div className="month-popup3-testimonial-card">
      <div className="month-popup3-container">
        <div className="month-popup3-container1">
          <div className="month-popup3-laundary">
            <span className="month-popup3-laundry-txt">{props.text4}</span>
          </div>
          <span className="month-popup3-text">{props.text}</span>
          <span className="month-popup3-text1">{props.text1}</span>
          <span className="month-popup3-text2">{props.text2}</span>
          <div className="month-popup3-laundary1">
            <span className="month-popup3-hostel-txt">{props.text45}</span>
          </div>
          <span className="month-popup3-text3">{props.text12}</span>
          <span className="month-popup3-text4">{props.text123}</span>
          <div className="month-popup3-laundary2">
            <span className="month-popup3-mess-txt">{props.text44}</span>
          </div>
          <span className="month-popup3-text5">{props.text122}</span>
          <span className="month-popup3-text6">{props.text1212}</span>
          <span className="month-popup3-text7">{props.text12121}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="month-popup3-image"
          />
        </div>
      </div>
      <div className="month-popup3-container2">
        <span className="month-popup3-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

MonthPopup3.defaultProps = {
  text1: '3 Washes/week',
  text11: 'month',
  text121: '3 Time Meal',
  text12121: '$1500',
  text12: 'Stanza Living',
  text44: '-Mess Fees',
  text431: '$6500!',
  text1211: '1',
  rootClassName: '',
  text2: '$1000',
  text122: "Richa's Kitchen",
  text45: '-Hostel Fees',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-300h.png',
  text: 'Wash It Laundry-',
  imageAlt3: 'image',
  text1212: '3 Time Meal',
  text123: '$4000',
  text4: '-Laundry',
}

MonthPopup3.propTypes = {
  text1: PropTypes.string,
  text11: PropTypes.string,
  text121: PropTypes.string,
  text12121: PropTypes.string,
  text12: PropTypes.string,
  text44: PropTypes.string,
  text431: PropTypes.string,
  text1211: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text122: PropTypes.string,
  text45: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  text1212: PropTypes.string,
  text123: PropTypes.string,
  text4: PropTypes.string,
}

export default MonthPopup3
