import React from 'react'

import PropTypes from 'prop-types'

import './subscription-popup.css'

const SubscriptionPopup = (props) => {
  return (
    <div className="subscription-popup-testimonial-card">
      <div className="subscription-popup-container">
        <div className="subscription-popup-container1">
          <div className="subscription-popup-laundary">
            <span className="subscription-popup-laundry-txt">
              {props.text4}
            </span>
          </div>
          <span className="subscription-popup-text">{props.text}</span>
          <span className="subscription-popup-text01">{props.text1}</span>
          <span className="subscription-popup-text02">{props.text2}</span>
          <div className="subscription-popup-laundary1">
            <span className="subscription-popup-hostel-txt">
              {props.text45}
            </span>
          </div>
          <span className="subscription-popup-text03">{props.text12}</span>
          <span className="subscription-popup-text04">{props.text123}</span>
          <div className="subscription-popup-laundary2">
            <span className="subscription-popup-mess-txt">{props.text441}</span>
          </div>
          <span className="subscription-popup-text05">{props.text122}</span>
          <span className="subscription-popup-text06">{props.text1212}</span>
          <span className="subscription-popup-text07">{props.text12121}</span>
          <div className="subscription-popup-laundary3">
            <span className="subscription-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="subscription-popup-text08">{props.text1221}</span>
          <span className="subscription-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="subscription-popup-image"
          />
        </div>
      </div>
      <div className="subscription-popup-container2">
        <span className="subscription-popup-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

SubscriptionPopup.defaultProps = {
  text431: '$28000!',
  text4: '-Laundry',
  text441: '-Mess Fees',
  text2: '$4500',
  rootClassName: '',
  text1221: 'RP Fitness',
  text44: '-Gym',
  text12121: '$4500',
  text12: 'Stanza Living',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text45: '-Hostel Fees',
  imageAlt3: 'image',
  text123: '$15000',
  text122: "Richa's Kitchen",
  text121211: '$4000',
  text1: '3 Washes/week',
  text1212: '4 Time Meal',
  text: 'Wash It Laundry-',
}

SubscriptionPopup.propTypes = {
  text431: PropTypes.string,
  text4: PropTypes.string,
  text441: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1221: PropTypes.string,
  text44: PropTypes.string,
  text12121: PropTypes.string,
  text12: PropTypes.string,
  imageSrc3: PropTypes.string,
  text45: PropTypes.string,
  imageAlt3: PropTypes.string,
  text123: PropTypes.string,
  text122: PropTypes.string,
  text121211: PropTypes.string,
  text1: PropTypes.string,
  text1212: PropTypes.string,
  text: PropTypes.string,
}

export default SubscriptionPopup
