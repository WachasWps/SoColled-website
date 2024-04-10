import React from 'react'

import PropTypes from 'prop-types'

import './food-popup1.css'

const FoodPopup1 = (props) => {
  return (
    <div className="food-popup1-testimonial-card">
      <div className="food-popup1-container">
        <div className="food-popup1-container1">
          <div className="food-popup1-laundary">
            <span className="food-popup1-laundry-txt">{props.text4}</span>
          </div>
          <span className="food-popup1-text">{props.text}</span>
          <span className="food-popup1-text01">{props.text1}</span>
          <span className="food-popup1-text02">{props.text2}</span>
          <div className="food-popup1-laundary1">
            <span className="food-popup1-hostel-txt">{props.text45}</span>
          </div>
          <span className="food-popup1-text03">{props.text12}</span>
          <span className="food-popup1-text04">{props.text123}</span>
          <div className="food-popup1-laundary2">
            <span className="food-popup1-mess-txt">{props.text441}</span>
          </div>
          <span className="food-popup1-text05">{props.text122}</span>
          <span className="food-popup1-text06">{props.text1212}</span>
          <span className="food-popup1-text07">{props.text12121}</span>
          <div className="food-popup1-laundary3">
            <span className="food-popup1-gym-txt">{props.text44}</span>
          </div>
          <span className="food-popup1-text08">{props.text1221}</span>
          <span className="food-popup1-text09">{props.text121211}</span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="food-popup1-image"
          />
        </div>
      </div>
      <div className="food-popup1-container2">
        <span className="food-popup1-laundry-txt1">{props.text431}</span>
      </div>
    </div>
  )
}

FoodPopup1.defaultProps = {
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text431: '$28000!',
  text122: "Richa's Kitchen",
  text45: '-Hostel Fees',
  rootClassName: '',
  text1: '3 Washes/week',
  text4: '-Laundry',
  text44: '-Gym',
  text12: 'Stanza Living',
  text1212: '4 Time Meal',
  text2: '$4500',
  text441: '-Mess Fees',
  imageAlt3: 'image',
  text1221: 'RP Fitness',
  text123: '$15000',
  text121211: '$4000',
  text: 'Wash It Laundry-',
  text12121: '$4500',
}

FoodPopup1.propTypes = {
  imageSrc3: PropTypes.string,
  text431: PropTypes.string,
  text122: PropTypes.string,
  text45: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text44: PropTypes.string,
  text12: PropTypes.string,
  text1212: PropTypes.string,
  text2: PropTypes.string,
  text441: PropTypes.string,
  imageAlt3: PropTypes.string,
  text1221: PropTypes.string,
  text123: PropTypes.string,
  text121211: PropTypes.string,
  text: PropTypes.string,
  text12121: PropTypes.string,
}

export default FoodPopup1
