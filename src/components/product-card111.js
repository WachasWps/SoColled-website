import React from 'react'

import PropTypes from 'prop-types'

import './product-card111.css'

const ProductCard111 = (props) => {
  return (
    <div className={`product-card111-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card111-image"
      />
      <span className="product-card111-text">{props.text}</span>
      <span className="product-card111-text1">{props.text1}</span>
      <span className="product-card111-text2">{props.text2}</span>
      <span className="product-card111-text3">{props.text3}</span>
    </div>
  )
}

ProductCard111.defaultProps = {
  rootClassName: '',
  imageSrc1:
    'https://images.unsplash.com/photo-1544244015-9c72fd9c866d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxpcGFkfGVufDB8fHx8MTcxMjE3MTM4OHww&ixlib=rb-4.0.3&h=400',
  imageAlt2: 'image',
  text2: '1 St gen ipad pro 11 inch',
  text1: '₹ 35,000',
  imageSrc:
    'https://images.unsplash.com/photo-1590252973641-1352f1a8885e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxpcGFkJTIwbHxlbnwwfHx8fDE3MTIxNzE0NjN8MA&ixlib=rb-4.0.3&w=400',
  imageAlt1: 'image',
  imageAlt: 'image',
  text3: 'Ravet, Pune, Maharashtra',
  text: 'TODAY',
  imageSrc2:
    'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGlwYWR8ZW58MHx8fHwxNzEyMTcxMzg4fDA&ixlib=rb-4.0.3&q=80&h=400',
}

ProductCard111.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default ProductCard111
