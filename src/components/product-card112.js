import React from 'react'

import PropTypes from 'prop-types'

import './product-card112.css'

const ProductCard112 = (props) => {
  return (
    <div className="product-card112-product-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card112-image"
      />
      <div className="product-card112-container"></div>
      <span className="product-card112-text">{props.text}</span>
      <span className="product-card112-text1">{props.text1}</span>
      <span className="product-card112-text2">{props.text2}</span>
      <span className="product-card112-text3">{props.text3}</span>
    </div>
  )
}

ProductCard112.defaultProps = {
  text3: 'Koregaon Park, Pune',
  imageAlt5: 'image',
  imageAlt3: 'image',
  text: 'TODAY',
  text1: '₹ 1,500',
  imageAlt2: 'image',
  imageSrc2:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  imageSrc5:
    'https://images.unsplash.com/photo-1618836958889-76f62f3724cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&h=400',
  imageSrc4:
    'https://images.unsplash.com/photo-1618836958889-76f62f3724cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&h=400',
  text2: 'PS5 Gaming Controller',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&w=400',
  imageSrc3:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&q=80&w=200',
  imageSrc1:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  imageAlt4: 'image',
  imageAlt: 'image',
  imageAlt1: 'image',
}

ProductCard112.propTypes = {
  text3: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc4: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default ProductCard112
