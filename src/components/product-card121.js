import React from 'react'

import PropTypes from 'prop-types'

import './product-card121.css'

const ProductCard121 = (props) => {
  return (
    <div className={`product-card121-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card121-image"
      />
      <span className="product-card121-text">{props.text}</span>
      <span className="product-card121-text1">{props.text1}</span>
      <span className="product-card121-text2">{props.text2}</span>
      <span className="product-card121-text3">{props.text3}</span>
    </div>
  )
}

ProductCard121.defaultProps = {
  text: 'TODAY',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxsYXB0b3B8ZW58MHx8fHwxNzEyMTQ1MzU4fDA&ixlib=rb-4.0.3&w=400',
  rootClassName: '',
  text3: 'Kunal Icon, Pune, Maharashtra',
  text1: '₹ 25,000',
  text2: 'Dell latitude e5450',
}

ProductCard121.propTypes = {
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ProductCard121
