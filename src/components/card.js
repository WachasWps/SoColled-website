import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-container ${props.rootClassName} `}>
      <div className="card-container1">
        <div className="card-container2">
          <img
            alt={props.imageAlt111}
            src={props.imageSrc111}
            className="card-image"
          />
        </div>
        <div className="card-feature-card button">
          <div className="card-container3">
            <span className="card-text">Resource Name</span>
          </div>
          <div data-thq="thq-dropdown" className="card-thq-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="card-dropdown-toggle"
            >
              <span className="card-text1">Time slot</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="card-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="card-icon">
                  <path d="M426 726v-428l214 214z" className=""></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="card-dropdown-list">
              <li data-thq="thq-dropdown" className="card-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="card-dropdown-toggle1"
                >
                  <span className="card-text2">10:00 am - 12:00 pm</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="card-dropdown1 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="card-dropdown-toggle2"
                >
                  <span className="card-text3">12:00 pm - 2: 00 pm</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="card-dropdown2 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="card-dropdown-toggle3"
                >
                  <span className="card-text4">2:00 pm - 4:00 pm</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="card-dropdown3 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="card-dropdown-toggle4"
                >
                  <span className="card-text5">4:00 pm - 6:00 pm</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="card-container4">
            <svg viewBox="0 0 1024 1024" className="card-icon2">
              <path
                d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM706 472l-254 254-136-136 46-46 90 90 208-208z"
                className=""
              ></path>
            </svg>
            <div className="card-container5">
              <span className="card-text6">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  rootClassName11: '',
  imageAlt: 'image',
  imageAlt111: 'image',
  rootClassName: '',
  text: 'Resource Name',
  rootClassName111: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1563520240533-66480a3916fe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHwzZCUyMHByaW50fGVufDB8fHx8MTcxMjc4MzcxMHww&ixlib=rb-4.0.3&w=300',
  text1: 'Text',
  imageSrc11: '36927aea-04f0-4424-b5b5-2286c7522f12',
  imageAlt11: 'image',
  imageAlt1: 'image',
  text2: 'Text',
  rootClassName1: '',
  imageSrc1: 'dbb92ff2-192b-45cb-9583-f904860a01eb',
  imageSrc: '98ebc5f7-a307-49d4-93e2-6252da4dbd79',
}

Card.propTypes = {
  rootClassName11: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt111: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  rootClassName111: PropTypes.string,
  imageSrc111: PropTypes.string,
  text1: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Card
