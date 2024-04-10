import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card-image"
      />
      <span className="product-card-text">{props.text}</span>
      <span className="product-card-text1">{props.text1}</span>
      <span className="product-card-text2">{props.text2}</span>
      <span className="product-card-text3">{props.text3}</span>
    </div>
  )
}

ProductCard.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  rootClassName: '',
  imageAlt: 'image',
  text2: 'Books for JEE Mains, Advanced and Neet',
  text: 'TODAY',
  text1: '₹ 350',
  text3: 'Nigdi Pradhikaran, Pune',
}

ProductCard.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default ProductCard
