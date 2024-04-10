import React from 'react'

import PropTypes from 'prop-types'

import './product-card114.css'

const ProductCard114 = (props) => {
  return (
    <div className={`product-card114-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card114-image"
      />
      <div className="product-card114-container"></div>
      <span className="product-card114-text">{props.text}</span>
      <span className="product-card114-text1">{props.text1}</span>
      <span className="product-card114-text2">{props.text2}</span>
      <span className="product-card114-text3">{props.text3}</span>
    </div>
  )
}

ProductCard114.defaultProps = {
  text1: '₹ 500',
  imageSrc1:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  rootClassName: '',
  imageSrc2:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageSrc3:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&q=80&w=200',
  text3: 'Aundh, Pune, Maharashtra',
  imageAlt: 'image',
  text2: 'Protein plastic container 1kg',
  imageAlt2: 'image',
  text: 'TODAY',
  imageSrc:
    'https://images.unsplash.com/photo-1576729388723-8699e1a2bb23?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBsYXN0aWMlMjBjb250YWluZXJzfGVufDB8fHx8MTcxMjE3MTk0OXww&ixlib=rb-4.0.3&w=400',
}

ProductCard114.propTypes = {
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc3: PropTypes.string,
  text3: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  imageAlt2: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ProductCard114
