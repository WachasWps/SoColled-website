import React from 'react'

import PropTypes from 'prop-types'

import './miscellaneous-popup.css'

const MiscellaneousPopup = (props) => {
  return (
    <div className="miscellaneous-popup-testimonial-card">
      <div className="miscellaneous-popup-container">
        <div className="miscellaneous-popup-container1">
          <div className="miscellaneous-popup-laundary">
            <span className="miscellaneous-popup-laundry-txt">
              {props.text4}
            </span>
          </div>
          <span className="miscellaneous-popup-text">{props.text}</span>
          <span className="miscellaneous-popup-text01">{props.text1}</span>
          <span className="miscellaneous-popup-text02">{props.text2}</span>
          <div className="miscellaneous-popup-laundary1">
            <span className="miscellaneous-popup-hostel-txt">
              {props.text45}
            </span>
          </div>
          <span className="miscellaneous-popup-text03">{props.text12}</span>
          <span className="miscellaneous-popup-text04">{props.text123}</span>
          <div className="miscellaneous-popup-laundary2">
            <span className="miscellaneous-popup-mess-txt">
              {props.text441}
            </span>
          </div>
          <span className="miscellaneous-popup-text05">{props.text122}</span>
          <span className="miscellaneous-popup-text06">{props.text1212}</span>
          <span className="miscellaneous-popup-text07">{props.text12121}</span>
          <div className="miscellaneous-popup-laundary3">
            <span className="miscellaneous-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="miscellaneous-popup-text08">{props.text1221}</span>
          <span className="miscellaneous-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="miscellaneous-popup-image"
          />
        </div>
      </div>
      <div className="miscellaneous-popup-container2">
        <span className="miscellaneous-popup-laundry-txt1">
          {props.text431}
        </span>
      </div>
    </div>
  )
}

MiscellaneousPopup.defaultProps = {
  text45: '-Hostel Fees',
  text431: '$28000!',
  text2: '$4500',
  text1: '3 Washes/week',
  imageAlt3: 'image',
  text12121: '$4500',
  text12: 'Stanza Living',
  text: 'Wash It Laundry-',
  text1212: '4 Time Meal',
  text4: '-Laundry',
  text44: '-Gym',
  text441: '-Mess Fees',
  text121211: '$4000',
  rootClassName: '',
  text1221: 'RP Fitness',
  text123: '$15000',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text122: "Richa's Kitchen",
}

MiscellaneousPopup.propTypes = {
  text45: PropTypes.string,
  text431: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  imageAlt3: PropTypes.string,
  text12121: PropTypes.string,
  text12: PropTypes.string,
  text: PropTypes.string,
  text1212: PropTypes.string,
  text4: PropTypes.string,
  text44: PropTypes.string,
  text441: PropTypes.string,
  text121211: PropTypes.string,
  rootClassName: PropTypes.string,
  text1221: PropTypes.string,
  text123: PropTypes.string,
  imageSrc3: PropTypes.string,
  text122: PropTypes.string,
}

export default MiscellaneousPopup
