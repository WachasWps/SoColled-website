import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CategoryGrid from '../components/category-grid'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SoCollEd</title>
        <meta property="og:title" content="SoCollEd" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container1"></div>
          <CategoryGrid rootClassName="category-grid-root-class-name"></CategoryGrid>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Home
