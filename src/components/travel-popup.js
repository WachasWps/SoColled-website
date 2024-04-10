import React from 'react'

import PropTypes from 'prop-types'

import './travel-popup.css'

const TravelPopup = (props) => {
  return (
    <div className="travel-popup-testimonial-card">
      <div className="travel-popup-container">
        <div className="travel-popup-container1">
          <div className="travel-popup-laundary">
            <span className="travel-popup-laundry-txt">{props.text4}</span>
          </div>
          <span className="travel-popup-text">{props.text}</span>
          <span className="travel-popup-text01">{props.text1}</span>
          <span className="travel-popup-text02">{props.text2}</span>
          <div className="travel-popup-laundary1">
            <span className="travel-popup-hostel-txt">{props.text45}</span>
          </div>
          <span className="travel-popup-text03">{props.text12}</span>
          <span className="travel-popup-text04">{props.text123}</span>
          <div className="travel-popup-laundary2">
            <span className="travel-popup-mess-txt">{props.text441}</span>
          </div>
          <span className="travel-popup-text05">{props.text122}</span>
          <span className="travel-popup-text06">{props.text1212}</span>
          <span className="travel-popup-text07">{props.text12121}</span>
          <div className="travel-popup-laundary3">
            <span className="travel-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="travel-popup-text08">{props.text1221}</span>
          <span className="travel-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="travel-popup-image"
          />
        </div>
      </div>
      <div className="travel-popup-container2">
        <span className="travel-popup-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

TravelPopup.defaultProps = {
  text2: '$4500',
  imageAlt3: 'image',
  rootClassName: '',
  text1221: 'RP Fitness',
  text12121: '$4500',
  text: 'Wash It Laundry-',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text123: '$15000',
  text1: '3 Washes/week',
  text44: '-Gym',
  text45: '-Hostel Fees',
  text122: "Richa's Kitchen",
  text121211: '$4000',
  text12: 'Stanza Living',
  text441: '-Mess Fees',
  text1212: '4 Time Meal',
  text431: '$28000!',
  text4: '-Laundry',
}

TravelPopup.propTypes = {
  text2: PropTypes.string,
  imageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1221: PropTypes.string,
  text12121: PropTypes.string,
  text: PropTypes.string,
  imageSrc3: PropTypes.string,
  text123: PropTypes.string,
  text1: PropTypes.string,
  text44: PropTypes.string,
  text45: PropTypes.string,
  text122: PropTypes.string,
  text121211: PropTypes.string,
  text12: PropTypes.string,
  text441: PropTypes.string,
  text1212: PropTypes.string,
  text431: PropTypes.string,
  text4: PropTypes.string,
}

export default TravelPopup
