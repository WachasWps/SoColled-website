import React from 'react'

import PropTypes from 'prop-types'

import './icon.css'

const Icon = (props) => {
  return (
    <div className={`icon-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="icon-icon">
        <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
      </svg>
    </div>
  )
}

Icon.defaultProps = {
  rootClassName: '',
}

Icon.propTypes = {
  rootClassName: PropTypes.string,
}

export default Icon
