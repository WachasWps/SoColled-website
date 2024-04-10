import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <select id="hhshs" className="component2-select">
        <option value="SORT BY">SORT BY</option>
        <option value="Price Low to High">Price Low to High</option>
        <option value="Price High to Low">Price High to Low</option>
        <option value="Most Relevant">Most Relevant</option>
        <option value="Featured">Featured</option>
      </select>
    </div>
  )
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2
