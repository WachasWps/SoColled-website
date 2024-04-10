import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <span className="component4-key-features">{props.keyFeatures}</span>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="component4-textinput input"
      />
      <span className="component4-ad-title">{props.adTitle}</span>
      <span className="component4-important">{props.important}</span>
    </div>
  )
}

Component4.defaultProps = {
  keyFeatures: 'Include condition, features and reason for selling',
  textinputPlaceholder: '',
  important: '*',
  rootClassName: '',
  adTitle: 'Description',
}

Component4.propTypes = {
  keyFeatures: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  important: PropTypes.string,
  rootClassName: PropTypes.string,
  adTitle: PropTypes.string,
}

export default Component4
