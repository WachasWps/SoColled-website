import React from 'react'

import PropTypes from 'prop-types'

import PastedImage from './pasted-image'
import './nav-map-sidebar.css'

const NavMapSidebar = (props) => {
  return (
    <div className={`nav-map-sidebar-container ${props.rootClassName} `}>
      <div className="nav-map-sidebar-sidebar">
        <div className="nav-map-sidebar-container1">
          <div className="nav-map-sidebar-container2">
            <svg
              viewBox="0 0 585.1428571428571 1024"
              className="nav-map-sidebar-icon"
            >
              <path
                d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
                className=""
              ></path>
            </svg>
            <div className="nav-map-sidebar-nav-item">
              <span className="nav-map-sidebar-text">College Buildings</span>
              <div className="nav-map-sidebar-options">
                <span className="nav-map-sidebar-text01">
                  <span className="">DYPCOE Building</span>
                  <br className=""></br>
                </span>
                <span className="nav-map-sidebar-text04">
                  <span className="">DYPCOA Building</span>
                  <br className=""></br>
                </span>
                <span className="nav-map-sidebar-text07">
                  <span className="">DYPIEMR Building</span>
                  <br className=""></br>
                </span>
                <span className="nav-map-sidebar-text10">
                  <span className="">DYPCOP Building</span>
                  <br className=""></br>
                </span>
                <span className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-map-sidebar-container3">
          <svg
            viewBox="0 0 585.1428571428571 1024"
            className="nav-map-sidebar-icon2"
          >
            <path
              d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
              className=""
            ></path>
          </svg>
          <div className="nav-map-sidebar-nav-item1">
            <span className="nav-map-sidebar-text14">Canteen</span>
            <div className="nav-map-sidebar-options1">
              <span className="nav-map-sidebar-text15">Campus Cafeteria</span>
              <span className="nav-map-sidebar-text16">Open Canteen</span>
              <span className="nav-map-sidebar-text17">
                Old College Canteen
              </span>
              <span className="nav-map-sidebar-text18">
                Architecture College Canteen
              </span>
            </div>
          </div>
        </div>
        <div className="nav-map-sidebar-container4">
          <svg
            viewBox="0 0 585.1428571428571 1024"
            className="nav-map-sidebar-icon4"
          >
            <path
              d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
              className=""
            ></path>
          </svg>
          <div className="nav-map-sidebar-nav-item2">
            <span className="nav-map-sidebar-text19">Xerox Centres</span>
            <div className="nav-map-sidebar-options2">
              <span className="nav-map-sidebar-text20">
                New Building Xerox Centre
              </span>
              <span className="nav-map-sidebar-text21">
                Architecture Xerox Centre
              </span>
              <span className="nav-map-sidebar-text22">
                Smart Store Xerox Centre
              </span>
            </div>
          </div>
        </div>
        <div className="nav-map-sidebar-container5">
          <svg
            viewBox="0 0 585.1428571428571 1024"
            className="nav-map-sidebar-icon6"
          >
            <path
              d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
              className=""
            ></path>
          </svg>
          <div className="nav-map-sidebar-nav-item3">
            <span className="nav-map-sidebar-text23">Stationery Stores</span>
            <div className="nav-map-sidebar-options3">
              <span className="nav-map-sidebar-text24">
                <span className="">Smart Store</span>
                <br className=""></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <PastedImage
        rootClassName="pasted-image-root-class-name1"
        className=""
      ></PastedImage>
    </div>
  )
}

NavMapSidebar.defaultProps = {
  rootClassName: '',
}

NavMapSidebar.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavMapSidebar
