import React from 'react'

import PropTypes from 'prop-types'

import './custom-package-form.css'

const CustomPackageForm = (props) => {
  return (
    <div
      className={`custom-package-form-testimonial-card ${props.rootClassName} `}
    >
      <div className="custom-package-form-container">
        <div className="custom-package-form-container1">
          <div className="custom-package-form-laundary">
            <span className="custom-package-form-laundry-txt">
              {props.text4}
            </span>
          </div>
          <select className="custom-package-form-select">
            <option value="Option 1" className="">
              Months
            </option>
            <option value="Option 2" className="">
              3 Months
            </option>
            <option value="Option 3" className="">
              6 Months
            </option>
          </select>
          <div className="custom-package-form-laundary1">
            <span className="custom-package-form-hostel-txt">
              {props.text45}
            </span>
          </div>
          <select className="custom-package-form-select1">
            <option value="Option 1" className="">
              Months
            </option>
            <option value="Option 1" className="">
              3 Months
            </option>
            <option value="Option 2" className="">
              6 months
            </option>
          </select>
          <div className="custom-package-form-laundary2">
            <span className="custom-package-form-mess-txt">{props.text44}</span>
          </div>
          <select className="custom-package-form-select2">
            <option value="Option 1" className="">
              Months
            </option>
            <option value="Option 1" className="">
              3 Months
            </option>
            <option value="Option 1" className="">
              6 Months
            </option>
          </select>
          <div className="custom-package-form-laundary3">
            <span className="custom-package-form-mess-txt1">
              {props.text441}
            </span>
          </div>
          <select className="custom-package-form-select3">
            <option value="Option 1" className="">
              Months
            </option>
            <option value="Option 1" className="">
              3 Months
            </option>
            <option value="Option 1" className="">
              6 Months
            </option>
          </select>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="custom-package-form-image"
          />
        </div>
      </div>
      <div className="custom-package-form-container2">
        <span className="custom-package-form-laundry-txt1">
          {props.text431}
        </span>
      </div>
    </div>
  )
}

CustomPackageForm.defaultProps = {
  text4: '-Laundry',
  text12121: '$1500',
  rootClassName: '',
  imageAlt3: 'image',
  text431: 'Total-',
  text1212: '3 Time Meal',
  text123: '$4000',
  text44: '-Mess Fees',
  text12: 'Stanza Living',
  text45: '-Hostel Fees',
  text122: "Richa's Kitchen",
  text441: '-Gym',
  text1: '3 Washes/week',
  text: 'Wash It Laundry-',
  imageSrc3:
    '/whatsapp_image_2024-04-04_at_1.07.22_am-removebg-preview-300h.png',
  text2: '$1000',
}

CustomPackageForm.propTypes = {
  text4: PropTypes.string,
  text12121: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt3: PropTypes.string,
  text431: PropTypes.string,
  text1212: PropTypes.string,
  text123: PropTypes.string,
  text44: PropTypes.string,
  text12: PropTypes.string,
  text45: PropTypes.string,
  text122: PropTypes.string,
  text441: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  imageSrc3: PropTypes.string,
  text2: PropTypes.string,
}

export default CustomPackageForm
