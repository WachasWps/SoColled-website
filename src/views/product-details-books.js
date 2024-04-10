import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ProfileSeller1 from '../components/profile-seller1'
import Footer from '../components/footer'
import './product-details-books.css'

const ProductDetailsBooks = (props) => {
  return (
    <div className="product-details-books-container">
      <Helmet>
        <title>Product-Details-books - SoCollEd</title>
        <meta property="og:title" content="Product-Details-books - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="product-details-books-hero">
        <svg viewBox="0 0 1024 1024" className="product-details-books-icon">
          <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
        </svg>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY2fHxib29rc3xlbnwwfHx8fDE3MTIyNDQ1MDR8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
          className="product-details-books-image"
        />
        <svg viewBox="0 0 1024 1024" className="product-details-books-icon2">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </div>
      <div className="product-details-books-hero1">
        <div className="product-details-books-container1">
          <div className="product-details-books-container2">
            <span className="product-details-books-text">
              <span className="product-details-books-text01">₹ 350</span>
              <br className="product-details-books-text02"></br>
              <br></br>
            </span>
            <span className="product-details-books-text04">
              <span className="product-details-books-text05">
                Books for JEE Mains, Advanced and Neet
              </span>
              <br></br>
            </span>
            <span className="product-details-books-text07">
              Nigdi Pradhikaran, Pune
            </span>
            <span className="product-details-books-text08">TODAY</span>
          </div>
          <ProfileSeller1 rootClassName="profile-seller1-root-class-name1"></ProfileSeller1>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name14"></Footer>
      <div className="product-details-books-book-description">
        <span className="product-details-books-text09">
          <span className="product-details-books-text10">Description</span>
          <br></br>
        </span>
        <span className="product-details-books-text12">
          <span>
            100% Updated with the latest 2023 JEE Main &amp; JEE Advanced
            question paper.
          </span>
          <br className="product-details-books-text14"></br>
          <br></br>
          <span>
            Previous 46 years’ papers of JEE Advanced/IIT JEE &amp; 22 years’
            papers of JEE Main/AIEEE.
          </span>
          <br className="product-details-books-text17"></br>
          <br></br>
          <span>
            Covers all the online and offline papers over the mentioned years
            along with all subjective &amp; objective questions.
          </span>
          <br className="product-details-books-text20"></br>
          <br></br>
          <span>
            Each chapter begins with a synopsis called “Snapshot” to understand
            the concept &amp; formulae.
          </span>
          <br className="product-details-books-text23"></br>
          <br></br>
          <span>
            Divided into two sections, class 11 and class 12 as per the NCERT
            syllabus.
          </span>
          <br className="product-details-books-text26"></br>
          <br></br>
          <span>
            Arranged in chapter-wise topic-wise format for convenience and
            level-wise progress.
          </span>
          <br className="product-details-books-text29"></br>
          <br></br>
          <span>
            Completely solved book with answer keys &amp; explanations for all
            176 Previous Years’ Papers and 5500+ previous years questions of
            JEE.
          </span>
          <br className="product-details-books-text32"></br>
          <br></br>
          <span>
            Get a free smart book of the digital replica of this book so that
            you can continue your studies anywhere, anytime without having to
            carry the book.
          </span>
          <br className="product-details-books-text35"></br>
          <br></br>
          <span>
            55000+ Previous years questions, 176 previous years papers, 91
            topics, 32 chapters, 10 categories.
          </span>
        </span>
      </div>
    </div>
  )
}

export default ProductDetailsBooks
