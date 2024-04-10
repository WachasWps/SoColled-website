import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
        className="app-component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
