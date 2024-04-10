import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className={`component6-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
        className="component6-image"
      />
    </div>
  )
}

Component6.defaultProps = {
  rootClassName: '',
}

Component6.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component6
