import React from 'react'

import PropTypes from 'prop-types'

import NavMapSidebar from './nav-map-sidebar'
import './nav-comp.css'

const NavComp = (props) => {
  return (
    <div className={`nav-comp-container ${props.rootClassName} `}>
      <NavMapSidebar
        rootClassName="nav-map-sidebar-root-class-name"
        className=""
      ></NavMapSidebar>
    </div>
  )
}

NavComp.defaultProps = {
  rootClassName: '',
}

NavComp.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavComp
