import React from 'react'

import PropTypes from 'prop-types'

import './month-popup.css'

const MonthPopup = (props) => {
  return (
    <div className="month-popup-testimonial-card">
      <div className="month-popup-container">
        <div className="month-popup-container1">
          <div className="month-popup-laundary">
            <span className="month-popup-laundry-txt">{props.text4}</span>
          </div>
          <span className="month-popup-text">{props.text}</span>
          <span className="month-popup-text01">{props.text1}</span>
          <span className="month-popup-text02">{props.text2}</span>
          <div className="month-popup-laundary1">
            <span className="month-popup-hostel-txt">{props.text45}</span>
          </div>
          <span className="month-popup-text03">{props.text12}</span>
          <span className="month-popup-text04">{props.text123}</span>
          <div className="month-popup-laundary2">
            <span className="month-popup-mess-txt">{props.text441}</span>
          </div>
          <span className="month-popup-text05">{props.text122}</span>
          <span className="month-popup-text06">{props.text1212}</span>
          <span className="month-popup-text07">{props.text12121}</span>
          <div className="month-popup-laundary3">
            <span className="month-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="month-popup-text08">{props.text1221}</span>
          <span className="month-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="month-popup-image"
          />
        </div>
      </div>
      <div className="month-popup-container2">
        <span className="month-popup-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

MonthPopup.defaultProps = {
  text4: '-Laundry',
  text431: '$52000!',
  text44: '-Gym',
  rootClassName: '',
  text1212: '4 Time Meal',
  text1221: 'RP Fitness',
  text441: '-Mess Fees',
  imageAlt3: 'image',
  text: 'Wash It Laundry-',
  text2: '$8000',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text121211: '$6000',
  text1: '4 Washes/week',
  text123: '$30000',
  text45: '-Hostel Fees',
  text122: "Richa's Kitchen",
  text12: 'Stanza Living',
  text12121: '$8000',
}

MonthPopup.propTypes = {
  text4: PropTypes.string,
  text431: PropTypes.string,
  text44: PropTypes.string,
  rootClassName: PropTypes.string,
  text1212: PropTypes.string,
  text1221: PropTypes.string,
  text441: PropTypes.string,
  imageAlt3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageSrc3: PropTypes.string,
  text121211: PropTypes.string,
  text1: PropTypes.string,
  text123: PropTypes.string,
  text45: PropTypes.string,
  text122: PropTypes.string,
  text12: PropTypes.string,
  text12121: PropTypes.string,
}

export default MonthPopup
