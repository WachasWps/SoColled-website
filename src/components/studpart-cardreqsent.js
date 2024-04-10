import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './studpart-cardreqsent.css'

const StudpartCardreqsent = (props) => {
  return (
    <div className={`studpart-cardreqsent-container ${props.rootClassName} `}>
      <div className="studpart-cardreqsent-feature-card">
        <AppComponent
          rootClassName="app-component-root-class-name1"
          className=""
        ></AppComponent>
        <div className="studpart-cardreqsent-container1">
          <div className="studpart-cardreqsent-container2">
            <div className="studpart-cardreqsent-container3">
              <h1 className="studpart-cardreqsent-name">{props.heading}</h1>
              <h1 className="studpart-cardreqsent-name1">{props.heading1}</h1>
            </div>
          </div>
        </div>
        <span className="studpart-cardreqsent-text">{props.text2}</span>
        <div className="studpart-cardreqsent-container4">
          <div className="studpart-cardreqsent-container5">
            <div className="studpart-cardreqsent-container6">
              <div className="studpart-cardreqsent-container7">
                <span className="studpart-cardreqsent-text1">
                  {props.text3}
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="studpart-cardreqsent-icon"
                >
                  <path
                    d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"
                    className=""
                  ></path>
                </svg>
              </div>
              <button
                type="button"
                className="studpart-cardreqsent-button button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="studpart-cardreqsent-icon2"
                >
                  <path
                    d="M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448z"
                    className=""
                  ></path>
                  <path
                    d="M848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z"
                    className=""
                  ></path>
                </svg>
                <span className="studpart-cardreqsent-text2">{props.text}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

StudpartCardreqsent.defaultProps = {
  text: 'Remove',
  text1: 'Green Flag',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
  rootClassName: '',
  heading: 'Name',
  heading1: 'Bio',
  text3: '3 days ago',
}

StudpartCardreqsent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text3: PropTypes.string,
}

export default StudpartCardreqsent
