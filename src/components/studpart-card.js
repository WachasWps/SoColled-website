import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './studpart-card.css'

const StudpartCard = (props) => {
  return (
    <div className={`studpart-card-container ${props.rootClassName} `}>
      <div className="studpart-card-feature-card">
        <AppComponent
          rootClassName="app-component-root-class-name"
          className=""
        ></AppComponent>
        <div className="studpart-card-container1">
          <div className="studpart-card-container2">
            <div className="studpart-card-container3">
              <h1 className="studpart-card-name">{props.heading}</h1>
              <h1 className="studpart-card-name1">{props.heading1}</h1>
            </div>
          </div>
        </div>
        <span className="studpart-card-text">{props.text2}</span>
        <div className="studpart-card-container4">
          <button type="button" className="studpart-card-button button">
            <svg viewBox="0 0 1024 1024" className="studpart-card-icon">
              <path
                d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
                className=""
              ></path>
            </svg>
            <span className="studpart-card-text1">{props.text}</span>
          </button>
          <svg viewBox="0 0 1024 1024" className="studpart-card-icon02">
            <path
              d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="studpart-card-icon04">
            <path
              d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="studpart-card-icon06">
            <path
              d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
              className=""
            ></path>
          </svg>
          <button type="button" className="studpart-card-button1 button">
            <svg viewBox="0 0 1024 1024" className="studpart-card-icon08">
              <path
                d="M614 256h240v426h-300l-16-84h-240v298h-84v-726h384z"
                className=""
              ></path>
            </svg>
            <span className="studpart-card-text2">{props.text1}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

StudpartCard.defaultProps = {
  button: 'Red Flag',
  text1: 'Green Flag',
  heading: 'Name',
  heading1: 'Bio',
  rootClassName: '',
  button1: 'Green Flag',
  text: 'Red Flag',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
}

StudpartCard.propTypes = {
  button: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default StudpartCard
