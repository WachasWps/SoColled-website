import React from 'react'

import PropTypes from 'prop-types'

import './month-popup2.css'

const MonthPopup2 = (props) => {
  return (
    <div className="month-popup2-testimonial-card">
      <div className="month-popup2-container">
        <div className="month-popup2-container1">
          <div className="month-popup2-laundary">
            <span className="month-popup2-laundry-txt">{props.text4}</span>
          </div>
          <span className="month-popup2-text">{props.text}</span>
          <span className="month-popup2-text1">{props.text1}</span>
          <span className="month-popup2-text2">{props.text2}</span>
          <div className="month-popup2-laundary1">
            <span className="month-popup2-hostel-txt">{props.text45}</span>
          </div>
          <span className="month-popup2-text3">{props.text12}</span>
          <span className="month-popup2-text4">{props.text123}</span>
          <div className="month-popup2-laundary2">
            <span className="month-popup2-mess-txt">{props.text44}</span>
          </div>
          <span className="month-popup2-text5">{props.text122}</span>
          <span className="month-popup2-text6">{props.text1212}</span>
          <span className="month-popup2-text7">{props.text12121}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="month-popup2-image"
          />
        </div>
      </div>
      <div className="month-popup2-container2">
        <span className="month-popup2-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

MonthPopup2.defaultProps = {
  text12: 'Stanza Living',
  text123: '$10000',
  text2: '$2000',
  rootClassName: '',
  text12121: '$3000',
  text1212: '3 Time Meal',
  text45: '-Hostel Fees',
  text122: "Richa's Kitchen",
  text: 'Wash It Laundry-',
  imageAlt3: 'image',
  text44: '-Mess Fees',
  text431: '$15000!',
  text1: '3 Washes/week',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-300h.png',
  text4: '-Laundry',
}

MonthPopup2.propTypes = {
  text12: PropTypes.string,
  text123: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text12121: PropTypes.string,
  text1212: PropTypes.string,
  text45: PropTypes.string,
  text122: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  text44: PropTypes.string,
  text431: PropTypes.string,
  text1: PropTypes.string,
  imageSrc3: PropTypes.string,
  text4: PropTypes.string,
}

export default MonthPopup2
