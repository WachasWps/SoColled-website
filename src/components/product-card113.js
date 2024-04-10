import React from 'react'

import PropTypes from 'prop-types'

import './product-card113.css'

const ProductCard113 = (props) => {
  return (
    <div className={`product-card113-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card113-image"
      />
      <div className="product-card113-container"></div>
      <span className="product-card113-text">{props.text}</span>
      <span className="product-card113-text1">{props.text1}</span>
      <span className="product-card113-text2">{props.text2}</span>
      <span className="product-card113-text3">{props.text3}</span>
    </div>
  )
}

ProductCard113.defaultProps = {
  imageSrc3:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&q=80&w=200',
  imageAlt1: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  imageAlt3: 'image',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHdhdGNofGVufDB8fHx8MTcxMjE3MTc4NHww&ixlib=rb-4.0.3&w=400',
  imageSrc2:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  imageAlt2: 'image',
  text2: 'Google Pixel Watch LTE',
  text1: '₹ 5,000',
  text3: 'Aundh, Pune, Maharashtra',
  text: '1st April, 2024',
  imageAlt: 'image',
}

ProductCard113.propTypes = {
  imageSrc3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ProductCard113
