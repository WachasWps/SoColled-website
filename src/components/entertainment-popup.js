import React from 'react'

import PropTypes from 'prop-types'

import './entertainment-popup.css'

const EntertainmentPopup = (props) => {
  return (
    <div className="entertainment-popup-testimonial-card">
      <div className="entertainment-popup-container">
        <div className="entertainment-popup-container1">
          <div className="entertainment-popup-laundary">
            <span className="entertainment-popup-laundry-txt">
              {props.text4}
            </span>
          </div>
          <span className="entertainment-popup-text">{props.text}</span>
          <span className="entertainment-popup-text01">{props.text1}</span>
          <span className="entertainment-popup-text02">{props.text2}</span>
          <div className="entertainment-popup-laundary1">
            <span className="entertainment-popup-hostel-txt">
              {props.text45}
            </span>
          </div>
          <span className="entertainment-popup-text03">{props.text12}</span>
          <span className="entertainment-popup-text04">{props.text123}</span>
          <div className="entertainment-popup-laundary2">
            <span className="entertainment-popup-mess-txt">
              {props.text441}
            </span>
          </div>
          <span className="entertainment-popup-text05">{props.text122}</span>
          <span className="entertainment-popup-text06">{props.text1212}</span>
          <span className="entertainment-popup-text07">{props.text12121}</span>
          <div className="entertainment-popup-laundary3">
            <span className="entertainment-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="entertainment-popup-text08">{props.text1221}</span>
          <span className="entertainment-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="entertainment-popup-image"
          />
        </div>
      </div>
      <div className="entertainment-popup-container2">
        <span className="entertainment-popup-laundry-txt1">
          {props.text431}
        </span>
      </div>
    </div>
  )
}

EntertainmentPopup.defaultProps = {
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text2: '$4500',
  text: 'Wash It Laundry-',
  text123: '$15000',
  rootClassName: '',
  text122: "Richa's Kitchen",
  text12121: '$4500',
  text1221: 'RP Fitness',
  text12: 'Stanza Living',
  text45: '-Hostel Fees',
  imageAlt3: 'image',
  text441: '-Mess Fees',
  text44: '-Gym',
  text1212: '4 Time Meal',
  text431: '$28000!',
  text4: '-Laundry',
  text1: '3 Washes/week',
  text121211: '$4000',
}

EntertainmentPopup.propTypes = {
  imageSrc3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text123: PropTypes.string,
  rootClassName: PropTypes.string,
  text122: PropTypes.string,
  text12121: PropTypes.string,
  text1221: PropTypes.string,
  text12: PropTypes.string,
  text45: PropTypes.string,
  imageAlt3: PropTypes.string,
  text441: PropTypes.string,
  text44: PropTypes.string,
  text1212: PropTypes.string,
  text431: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text121211: PropTypes.string,
}

export default EntertainmentPopup
