import React from 'react'

import PropTypes from 'prop-types'

import './product-card1.css'

const ProductCard1 = (props) => {
  return (
    <div className={`product-card1-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card1-image"
      />
      <span className="product-card1-text">{props.text}</span>
      <span className="product-card1-text1">{props.text1}</span>
      <span className="product-card1-text2">{props.text2}</span>
      <span className="product-card1-text3">{props.text3}</span>
    </div>
  )
}

ProductCard1.defaultProps = {
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1602726428221-9af5b227ed5d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtb3VzZXxlbnwwfHx8fDE3MTIxNzA5NjV8MA&ixlib=rb-4.0.3&w=400',
  text1: '₹ 900',
  text3: 'Viman Nagar, Pune',
  imageAlt: 'image',
  text2: 'Logitech MK220 wireless keyboard with mouse',
  text: '2nd April',
}

ProductCard1.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default ProductCard1
