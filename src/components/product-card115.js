import React from 'react'

import PropTypes from 'prop-types'

import './product-card115.css'

const ProductCard115 = (props) => {
  return (
    <div className={`product-card115-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card115-image"
      />
      <div className="product-card115-container"></div>
      <span className="product-card115-text">{props.text}</span>
      <span className="product-card115-text1">{props.text1}</span>
      <span className="product-card115-text2">{props.text2}</span>
      <span className="product-card115-text3">{props.text3}</span>
    </div>
  )
}

ProductCard115.defaultProps = {
  imageAlt3: 'image',
  imageAlt2: 'image',
  imageAlt1: 'image',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGRyb25lfGVufDB8fHx8MTcxMjE3MjA1OHww&ixlib=rb-4.0.3&w=400',
  rootClassName: '',
  imageSrc2:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  text2: 'WEDDING HD DRONE CAMERA WITH REMOT CONTROL',
  text: '25th March, 2024',
  imageSrc3:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&q=80&w=200',
  text3: 'Koregaon Park, Pune',
  imageSrc1:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  text1: '₹ 10,500',
}

ProductCard115.propTypes = {
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc2: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  imageSrc3: PropTypes.string,
  text3: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
}

export default ProductCard115
