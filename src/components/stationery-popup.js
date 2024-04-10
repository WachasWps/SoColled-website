import React from 'react'

import PropTypes from 'prop-types'

import './stationery-popup.css'

const StationeryPopup = (props) => {
  return (
    <div className="stationery-popup-testimonial-card">
      <div className="stationery-popup-container">
        <div className="stationery-popup-container1">
          <div className="stationery-popup-laundary">
            <span className="stationery-popup-laundry-txt">{props.text4}</span>
          </div>
          <span className="stationery-popup-text">{props.text}</span>
          <span className="stationery-popup-text01">{props.text1}</span>
          <span className="stationery-popup-text02">{props.text2}</span>
          <div className="stationery-popup-laundary1">
            <span className="stationery-popup-hostel-txt">{props.text45}</span>
          </div>
          <span className="stationery-popup-text03">{props.text12}</span>
          <span className="stationery-popup-text04">{props.text123}</span>
          <div className="stationery-popup-laundary2">
            <span className="stationery-popup-mess-txt">{props.text441}</span>
          </div>
          <span className="stationery-popup-text05">{props.text122}</span>
          <span className="stationery-popup-text06">{props.text1212}</span>
          <span className="stationery-popup-text07">{props.text12121}</span>
          <div className="stationery-popup-laundary3">
            <span className="stationery-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="stationery-popup-text08">{props.text1221}</span>
          <span className="stationery-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="stationery-popup-image"
          />
        </div>
      </div>
      <div className="stationery-popup-container2">
        <span className="stationery-popup-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

StationeryPopup.defaultProps = {
  text1221: 'RP Fitness',
  text1212: '4 Time Meal',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text431: '$28000!',
  rootClassName: '',
  text441: '-Mess Fees',
  text1: '3 Washes/week',
  text2: '$4500',
  text122: "Richa's Kitchen",
  text12121: '$4500',
  text121211: '$4000',
  imageAlt3: 'image',
  text: 'Wash It Laundry-',
  text123: '$15000',
  text44: '-Gym',
  text12: 'Stanza Living',
  text4: '-Laundry',
  text45: '-Hostel Fees',
}

StationeryPopup.propTypes = {
  text1221: PropTypes.string,
  text1212: PropTypes.string,
  imageSrc3: PropTypes.string,
  text431: PropTypes.string,
  rootClassName: PropTypes.string,
  text441: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text122: PropTypes.string,
  text12121: PropTypes.string,
  text121211: PropTypes.string,
  imageAlt3: PropTypes.string,
  text: PropTypes.string,
  text123: PropTypes.string,
  text44: PropTypes.string,
  text12: PropTypes.string,
  text4: PropTypes.string,
  text45: PropTypes.string,
}

export default StationeryPopup
