import React from 'react'

import PropTypes from 'prop-types'

import './product-card2.css'

const ProductCard2 = (props) => {
  return (
    <div className={`product-card2-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card2-image"
      />
      <span className="product-card2-text">{props.text}</span>
      <span className="product-card2-text1">{props.text1}</span>
      <span className="product-card2-text2">{props.text2}</span>
      <span className="product-card2-text3">{props.text3}</span>
    </div>
  )
}

ProductCard2.defaultProps = {
  text3: 'Nigdi Pradhikaran, Pune',
  text2: 'Books for JEE Mains, Advanced and Neet',
  imageSrc:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  text1: '₹ 350',
  rootClassName: '',
  text: 'TODAY',
  imageAlt: 'image',
}

ProductCard2.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ProductCard2
