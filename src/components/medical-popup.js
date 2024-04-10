import React from 'react'

import PropTypes from 'prop-types'

import './medical-popup.css'

const MedicalPopup = (props) => {
  return (
    <div className="medical-popup-testimonial-card">
      <div className="medical-popup-container">
        <div className="medical-popup-container1">
          <div className="medical-popup-laundary">
            <span className="medical-popup-laundry-txt">{props.text4}</span>
          </div>
          <span className="medical-popup-text">{props.text}</span>
          <span className="medical-popup-text01">{props.text1}</span>
          <span className="medical-popup-text02">{props.text2}</span>
          <div className="medical-popup-laundary1">
            <span className="medical-popup-hostel-txt">{props.text45}</span>
          </div>
          <span className="medical-popup-text03">{props.text12}</span>
          <span className="medical-popup-text04">{props.text123}</span>
          <div className="medical-popup-laundary2">
            <span className="medical-popup-mess-txt">{props.text441}</span>
          </div>
          <span className="medical-popup-text05">{props.text122}</span>
          <span className="medical-popup-text06">{props.text1212}</span>
          <span className="medical-popup-text07">{props.text12121}</span>
          <div className="medical-popup-laundary3">
            <span className="medical-popup-gym-txt">{props.text44}</span>
          </div>
          <span className="medical-popup-text08">{props.text1221}</span>
          <span className="medical-popup-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="medical-popup-image"
          />
        </div>
      </div>
      <div className="medical-popup-container2">
        <span className="medical-popup-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

MedicalPopup.defaultProps = {
  text44: '-Gym',
  text45: '-Hostel Fees',
  text12: 'Stanza Living',
  text12121: '$4500',
  text431: '$28000!',
  text2: '$4500',
  rootClassName: '',
  text122: "Richa's Kitchen",
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text441: '-Mess Fees',
  text: 'Wash It Laundry-',
  text1212: '4 Time Meal',
  text4: '-Laundry',
  imageAlt3: 'image',
  text121211: '$4000',
  text1221: 'RP Fitness',
  text123: '$15000',
  text1: '3 Washes/week',
}

MedicalPopup.propTypes = {
  text44: PropTypes.string,
  text45: PropTypes.string,
  text12: PropTypes.string,
  text12121: PropTypes.string,
  text431: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text122: PropTypes.string,
  imageSrc3: PropTypes.string,
  text441: PropTypes.string,
  text: PropTypes.string,
  text1212: PropTypes.string,
  text4: PropTypes.string,
  imageAlt3: PropTypes.string,
  text121211: PropTypes.string,
  text1221: PropTypes.string,
  text123: PropTypes.string,
  text1: PropTypes.string,
}

export default MedicalPopup
