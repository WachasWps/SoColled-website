import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './create-customs-sub.css'

const CreateCustomsSub = (props) => {
  return (
    <div
      className={`create-customs-sub-testimonial-card ${props.rootClassName} `}
    >
      <div className="create-customs-sub-container">
        <span className="create-customs-sub-text">{props.text}</span>
      </div>
      <div className="create-customs-sub-container1">
        <Link
          to="/custom-package-page"
          className="create-customs-sub-navlink button"
        >
          {props.button}
        </Link>
      </div>
    </div>
  )
}

CreateCustomsSub.defaultProps = {
  rootClassName: '',
  text44: 'Mess Fees',
  button: 'Create',
  text1211: '1',
  text4: 'Laundry',
  imageSrc3: '47f57483-c9b1-4e2d-8f41-ec4b795ed9e7',
  text: 'Create Custom Packages!',
  imageAlt3: 'image',
  text45: 'Hostel Fees',
  text431: 'Total-$6500!',
  text11: 'month',
}

CreateCustomsSub.propTypes = {
  rootClassName: PropTypes.string,
  text44: PropTypes.string,
  button: PropTypes.string,
  text1211: PropTypes.string,
  text4: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  text45: PropTypes.string,
  text431: PropTypes.string,
  text11: PropTypes.string,
}

export default CreateCustomsSub
