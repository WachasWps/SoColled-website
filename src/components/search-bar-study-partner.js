import React from 'react'

import PropTypes from 'prop-types'

import './search-bar-study-partner.css'

const SearchBarStudyPartner = (props) => {
  return (
    <div
      className={`search-bar-study-partner-container ${props.rootClassName} `}
    >
      <header data-role="Header" className="search-bar-study-partner-header">
        <div className="search-bar-study-partner-container1">
          <div className="search-bar-study-partner-icon-group">
            <div
              data-role="BurgerMenu"
              className="search-bar-study-partner-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="search-bar-study-partner-icon"
              >
                <path
                  d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="search-bar-study-partner-icon2"
          >
            <path
              d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
              className=""
            ></path>
          </svg>
        </div>
        <input
          type="text"
          value="Search"
          placeholder={props.textinputPlaceholder2}
          className="search-bar-study-partner-input input"
        />
      </header>
    </div>
  )
}

SearchBarStudyPartner.defaultProps = {
  textinputPlaceholder1: 'placeholder',
  text: 'Search',
  textinputPlaceholder2: 'placeholder',
  textareaPlaceholder: 'placeholder',
  rootClassName: '',
  textinputPlaceholder: 'placeholder',
}

SearchBarStudyPartner.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default SearchBarStudyPartner
