import React from 'react'

import PropTypes from 'prop-types'

import Component3 from './component3'
import './studpart-card-create.css'

const StudpartCardCreate = (props) => {
  return (
    <div className={`studpart-card-create-container ${props.rootClassName} `}>
      <div className="studpart-card-create-blog-post-card">
        <Component3
          rootClassName="component3-root-class-name"
          className=""
        ></Component3>
        <div className="studpart-card-create-container1">
          <div className="studpart-card-create-container2">
            <span className="studpart-card-create-text">Create Request</span>
          </div>
          <div className="studpart-card-create-container3">
            <div className="studpart-card-create-container4">
              <div className="studpart-card-create-container5">
                <h1 className="studpart-card-create-text01">Enter Name</h1>
              </div>
            </div>
            <div
              data-thq="thq-dropdown"
              className="studpart-card-create-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="studpart-card-create-dropdown-toggle"
              >
                <span className="studpart-card-create-text02">
                  Select Subject
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="studpart-card-create-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="studpart-card-create-icon"
                  >
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="studpart-card-create-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="studpart-card-create-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="studpart-card-create-dropdown-toggle1"
                  >
                    <span className="studpart-card-create-text03">M-1</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="studpart-card-create-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="studpart-card-create-dropdown-toggle2"
                  >
                    <span className="studpart-card-create-text04">BEE</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="studpart-card-create-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="studpart-card-create-dropdown-toggle3"
                  >
                    <span className="studpart-card-create-text05">Physics</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="studpart-card-create-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="studpart-card-create-dropdown-toggle4"
                  >
                    <span className="studpart-card-create-text06">Chem</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="studpart-card-create-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="studpart-card-create-dropdown-toggle5"
                  >
                    <span className="studpart-card-create-text07">
                      Computer Science
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <span className="studpart-card-create-text08">
            <span className="">Describe Yourself</span>
            <br className=""></br>
          </span>
          <textarea
            placeholder={props.textareaPlaceholder}
            className="studpart-card-create-textarea textarea"
          ></textarea>
          <button type="button" className="studpart-card-create-button button">
            {props.button}
          </button>
          <div className="studpart-card-create-container6">
            <div className="studpart-card-create-profile">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                className="studpart-card-create-image"
              />
              <button
                type="button"
                className="studpart-card-create-button1 button"
              >
                <span className="studpart-card-create-text11">
                  Upload Photo
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="studpart-card-create-icon2"
                >
                  <path
                    d="M214 768h596v86h-596v-86zM384 682v-256h-170l298-298 298 298h-170v256h-256z"
                    className=""
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

StudpartCardCreate.defaultProps = {
  button1: 'Upload Photo',
  text1: 'Green Flag',
  heading: 'Name',
  textinputPlaceholder: 'placeholder',
  button: 'Submit',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
  rootClassName: '',
  heading1: 'Bio',
  text: 'Red Flag',
  textareaPlaceholder: 'placeholder',
}

StudpartCardCreate.propTypes = {
  button1: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
}

export default StudpartCardCreate
