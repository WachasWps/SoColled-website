import React from 'react'

import PropTypes from 'prop-types'

import './add-price.css'

const AddPrice = (props) => {
  return (
    <div className={`add-price-container ${props.rootClassName} `}>
      <div className="add-price-container1">
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="input add-price-textinput"
        />
        <span className="add-price-key-features">{props.keyFeatures}</span>
      </div>
      <span className="add-price-ad-title">{props.addprice}</span>
      <span className="add-price-important">{props.important}</span>
    </div>
  )
}

AddPrice.defaultProps = {
  textinputPlaceholder: '',
  rootClassName: '',
  important: '*',
  keyFeatures: 'Mention the key features of your item',
  addprice: 'Ad Title',
}

AddPrice.propTypes = {
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  important: PropTypes.string,
  keyFeatures: PropTypes.string,
  addprice: PropTypes.string,
}

export default AddPrice
