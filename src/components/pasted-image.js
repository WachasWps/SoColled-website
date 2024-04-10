import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className={`pasted-image-container ${props.rootClassName} `}>
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImageSrc: '/external/pastedimage-3yjn-600h.png',
  rootClassName: '',
  pastedImageAlt: 'pastedImage',
}

PastedImage.propTypes = {
  pastedImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default PastedImage
