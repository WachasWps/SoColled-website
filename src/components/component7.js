import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className={`component7-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
        className="component7-image"
      />
    </div>
  )
}

Component7.defaultProps = {
  rootClassName: '',
}

Component7.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component7
