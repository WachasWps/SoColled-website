import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBarMarketplace from '../components/search-bar-marketplace'
import ProductCard113 from '../components/product-card113'
import ProductCard121 from '../components/product-card121'
import ProductCard115 from '../components/product-card115'
import ProductCard11 from '../components/product-card11'
import ProductCard1 from '../components/product-card1'
import ProductCard111 from '../components/product-card111'
import ProductCard1121 from '../components/product-card1121'
import ProductCard116 from '../components/product-card116'
import ProductCard114 from '../components/product-card114'
import Footer from '../components/footer'
import './marketplace.css'

const Marketplace = (props) => {
  return (
    <div className="marketplace-container">
      <Helmet>
        <title>Marketplace - SoCollEd</title>
        <meta property="og:title" content="Marketplace - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      
      <footer className="marketplace-footer"></footer>
      <SearchBarMarketplace rootClassName="search-bar-marketplace-root-class-name"></SearchBarMarketplace>
      <div data-thq="thq-dropdown" className="marketplace-dropdown list-item">
        <ul data-thq="thq-dropdown-list" className="marketplace-dropdown-list">
          <li
            data-thq="thq-dropdown"
            className="marketplace-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="marketplace-dropdown-toggle"
            >
              <span className="marketplace-text">Price Low to High</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="marketplace-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="marketplace-dropdown-toggle1"
            >
              <span className="marketplace-text01">Price High to Low</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="marketplace-dropdown3 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="marketplace-dropdown-toggle2"
            >
              <span className="marketplace-text02">Most Relevant</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="marketplace-dropdown4 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="marketplace-dropdown-toggle3"
            >
              <span className="marketplace-text03">
                <span>Featured</span>
                <br></br>
              </span>
            </div>
          </li>
        </ul>
        <div
          data-thq="thq-dropdown-toggle"
          className="marketplace-dropdown-toggle4"
        >
          <div
            data-thq="thq-dropdown-arrow"
            className="marketplace-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="marketplace-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
          <span className="marketplace-text06">SORT BY</span>
        </div>
      </div>
      <div className="marketplace-product-cards">
        <ProductCard113 rootClassName="product-card113-root-class-name"></ProductCard113>
        <ProductCard121 rootClassName="product-card121-root-class-name"></ProductCard121>
        <ProductCard115 rootClassName="product-card115-root-class-name"></ProductCard115>
        <Link to="/product-details-books" className="marketplace-navlink">
          <ProductCard11
            rootClassName="product-card11-root-class-name"
            className="marketplace-component05"
          ></ProductCard11>
        </Link>
        <Link to="/product-details-mouse" className="marketplace-navlink1">
          <ProductCard1
            rootClassName="product-card1-root-class-name1"
            className="marketplace-product-card9"
          ></ProductCard1>
        </Link>
        <ProductCard111 rootClassName="product-card111-root-class-name"></ProductCard111>
        <ProductCard1121 rootClassName="product-card1121-root-class-name"></ProductCard1121>
        <ProductCard116 rootClassName="product-card116-root-class-name"></ProductCard116>
        <ProductCard114 rootClassName="product-card114-root-class-name"></ProductCard114>
      </div>
      <Link to="/sell-product" className="marketplace-navlink2 button">
        <span className="marketplace-text07">
          <span className="marketplace-text08">+SELL</span>
          <br></br>
        </span>
      </Link>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Marketplace
