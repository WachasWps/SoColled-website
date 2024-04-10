import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=1000"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="component3-image"
      />
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
