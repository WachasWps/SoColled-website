import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './resource-card.css'

const ResourceCard = (props) => {
  return (
    <div className={`resource-card-container ${props.rootClassName} `}>
      <div className="resource-card-feature-card">
        <AppComponent
          rootClassName="app-component-root-class-name4"
          className=""
        ></AppComponent>
        <div className="resource-card-container01">
          <div className="resource-card-container02">
            <div className="resource-card-container03">
              <div className="resource-card-container04">
                <h1 className="resource-card-name">{props.heading}</h1>
                <h1 className="resource-card-name1">{props.heading2}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="resource-card-container05">
          <span className="resource-card-text">{props.text2}</span>
          <h1 className="resource-card-name2">{props.heading22}</h1>
        </div>
        <div className="resource-card-container06">
          <div className="resource-card-container07"></div>
        </div>
        <div className="resource-card-container08">
          <div className="resource-card-container09">
            <div className="resource-card-container10">
              <div className="resource-card-container11">
                <div
                  data-thq="thq-dropdown"
                  className="resource-card-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="resource-card-dropdown-toggle"
                  >
                    <span className="resource-card-text01">
                      <span className="">Select Timeslot</span>
                      <br className=""></br>
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="resource-card-dropdown-arrow"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="resource-card-icon"
                      >
                        <path d="M426 726v-428l214 214z" className=""></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="resource-card-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="resource-card-dropdown list-item"
                    ></li>
                    <li
                      data-thq="thq-dropdown"
                      className="resource-card-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="resource-card-dropdown-toggle1"
                      >
                        <span className="resource-card-text04">
                          <span className="">2:00 pm - 4:00 pm</span>
                          <br className=""></br>
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="resource-card-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="resource-card-dropdown-toggle2"
                      >
                        <span className="resource-card-text07">
                          <span className="">12:00 pm - 2:00 pm</span>
                          <br className=""></br>
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="resource-card-dropdown3 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="resource-card-dropdown-toggle3"
                      >
                        <span className="resource-card-text10">
                          10:00 am - 12:00 pm
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resource-card-container12">
          <label className="resource-card-text11">{props.text}</label>
          <svg viewBox="0 0 1024 1024" className="resource-card-icon2">
            <path
              d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM706 472l-254 254-136-136 46-46 90 90 208-208z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

ResourceCard.defaultProps = {
  heading21: '9847263154College NameResource Name',
  text: 'Available',
  text2: 'CONTACT DETAILS  - Sabhya Lokhande',
  heading: 'Resource Name',
  heading1: 'Name',
  heading22: '9847362534',
  heading2: 'College Name',
  rootClassName: '',
}

ResourceCard.propTypes = {
  heading21: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading22: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ResourceCard
