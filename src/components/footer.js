import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <Link to="/" className="footer-navlink">
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="footer-image"
          />
        </Link>
        <span className="footer-text">{props.text7}</span>
        <span className="footer-text1">{props.text71}</span>
        <span className="footer-text2">{props.text712}</span>
        <span className="footer-text3">{props.text711}</span>
        <span className="footer-text4">{props.text5}</span>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  text5: '© SoCollEd. AllRightsReserved',
  text6: 'Text',
  imageAlt: 'Terms and Conditions',
  text2: 'About Us',
  imageAlt3: 'image',
  text43: 'About us',
  text41: 'Terms and Conditions',
  text212: 'About Us',
  text71: 'About Us',
  text3: 'Contact Us',
  text4: 'About us',
  imageSrc: '56499e60-cdf1-47ca-9e95-8607a7f7fc2c',
  imageAlt2: 'image',
  text1: 'Services',
  imageAlt1: 'image',
  text211: 'About Us',
  text711: 'Services',
  text42: 'Services',
  text: 'Terms',
  rootClassName: '',
  text411: 'Contact Us',
  text412: 'Terms and Conditions',
  imageSrc1: '56499e60-cdf1-47ca-9e95-8607a7f7fc2c',
  text712: 'Terms & Conditions',
  imageSrc3: '/social%20college%20education_20240403_010937_0000-200h.png',
  text21: 'About Us',
  text11: 'Contact Us',
  text7: 'Contact Us',
  imageSrc2: '56499e60-cdf1-47ca-9e95-8607a7f7fc2c',
}

Footer.propTypes = {
  text5: PropTypes.string,
  text6: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  imageAlt3: PropTypes.string,
  text43: PropTypes.string,
  text41: PropTypes.string,
  text212: PropTypes.string,
  text71: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  text1: PropTypes.string,
  imageAlt1: PropTypes.string,
  text211: PropTypes.string,
  text711: PropTypes.string,
  text42: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text411: PropTypes.string,
  text412: PropTypes.string,
  imageSrc1: PropTypes.string,
  text712: PropTypes.string,
  imageSrc3: PropTypes.string,
  text21: PropTypes.string,
  text11: PropTypes.string,
  text7: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default Footer
