import React from 'react'

import PropTypes from 'prop-types'

import './product-card12.css'

const ProductCard12 = (props) => {
  return (
    <div className="product-card12-product-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card12-image"
      />
      <span className="product-card12-text">{props.text}</span>
      <span className="product-card12-text1">{props.text1}</span>
      <span className="product-card12-text2">{props.text2}</span>
      <span className="product-card12-text3">{props.text3}</span>
    </div>
  )
}

ProductCard12.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxsYXB0b3B8ZW58MHx8fHwxNzEyMTQ1MzU4fDA&ixlib=rb-4.0.3&w=400',
  imageAlt: 'image',
  text1: '₹ 25,000',
  text3: 'Kunal Icon, Pune, Maharashtra',
  text2: 'Dell latitude e5450',
  rootClassName: '',
  text: 'TODAY',
}

ProductCard12.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ProductCard12
