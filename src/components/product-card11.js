import React from 'react'

import PropTypes from 'prop-types'

import './product-card11.css'

const ProductCard11 = (props) => {
  return (
    <div className={`product-card11-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card11-image"
      />
      <span className="product-card11-text">{props.text}</span>
      <span className="product-card11-text1">{props.text1}</span>
      <span className="product-card11-text2">{props.text2}</span>
      <span className="product-card11-text3">{props.text3}</span>
    </div>
  )
}

ProductCard11.defaultProps = {
  imageAlt: 'image',
  text1: '₹ 350',
  rootClassName: '',
  text2: 'Books for JEE Mains, Advanced and Neet',
  imageSrc:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  text3: 'Nigdi Pradhikaran, Pune',
  text: 'TODAY',
}

ProductCard11.propTypes = {
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default ProductCard11
