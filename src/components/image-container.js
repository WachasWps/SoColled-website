import React from 'react'

import PropTypes from 'prop-types'

import './image-container.css'

const ImageContainer = (props) => {
  return (
    <div className={`image-container-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="image-container-image"
      />
    </div>
  )
}

ImageContainer.defaultProps = {
  imageSrc:
    '"C:\\Users\\Jayditya\\Downloads\\WhatsApp_Image_2024-04-03_at_2.33.40_PM-removebg-preview.png"',
  rootClassName: '',
  imageAlt: 'image',
}

ImageContainer.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ImageContainer
