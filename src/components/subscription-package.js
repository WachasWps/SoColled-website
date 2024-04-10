import React from 'react'

import PropTypes from 'prop-types'

import './subscription-package.css'

const SubscriptionPackage = (props) => {
  return (
    <div className="subscription-package-testimonial-card">
      <div className="subscription-package-container">
        <div className="subscription-package-container1">
          <div className="subscription-package-laundary">
            <span className="subscription-package-laundry-txt">
              {props.text4}
            </span>
          </div>
          <span className="subscription-package-text">{props.text}</span>
          <span className="subscription-package-text01">{props.text1}</span>
          <span className="subscription-package-text02">{props.text2}</span>
          <div className="subscription-package-laundary1">
            <span className="subscription-package-hostel-txt">
              {props.text45}
            </span>
          </div>
          <span className="subscription-package-text03">{props.text12}</span>
          <span className="subscription-package-text04">{props.text123}</span>
          <div className="subscription-package-laundary2">
            <span className="subscription-package-mess-txt">
              {props.text441}
            </span>
          </div>
          <span className="subscription-package-text05">{props.text122}</span>
          <span className="subscription-package-text06">{props.text1212}</span>
          <span className="subscription-package-text07">{props.text12121}</span>
          <div className="subscription-package-laundary3">
            <span className="subscription-package-gym-txt">{props.text44}</span>
          </div>
          <span className="subscription-package-text08">{props.text1221}</span>
          <span className="subscription-package-text09">
            {props.text121211}
          </span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="subscription-package-image"
          />
        </div>
      </div>
      <div className="subscription-package-container2">
        <span className="subscription-package-laundry-txt1">
          {props.text431}
        </span>
      </div>
    </div>
  )
}

SubscriptionPackage.defaultProps = {
  rootClassName: '',
  text121211: '$4000',
  text45: '-Hostel Fees',
  text12: 'Stanza Living',
  text44: '-Gym',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-500h.png',
  text431: '$28000!',
  text1221: 'RP Fitness',
  text122: "Richa's Kitchen",
  text: 'Wash It Laundry-',
  text1: '3 Washes/week',
  text1212: '4 Time Meal',
  text2: '$4500',
  text12121: '$4500',
  text4: '-Laundry',
  imageAlt3: 'image',
  text441: '-Mess Fees',
  text123: '$15000',
}

SubscriptionPackage.propTypes = {
  rootClassName: PropTypes.string,
  text121211: PropTypes.string,
  text45: PropTypes.string,
  text12: PropTypes.string,
  text44: PropTypes.string,
  imageSrc3: PropTypes.string,
  text431: PropTypes.string,
  text1221: PropTypes.string,
  text122: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text1212: PropTypes.string,
  text2: PropTypes.string,
  text12121: PropTypes.string,
  text4: PropTypes.string,
  imageAlt3: PropTypes.string,
  text441: PropTypes.string,
  text123: PropTypes.string,
}

export default SubscriptionPackage
