import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './category-grid.css'

const CategoryGrid = (props) => {
  return (
    <div className={`category-grid-container ${props.rootClassName} `}>
      <div className="category-grid-container1">
        <div className="category-grid-container2">
          <Link to="/study-partner" className="">
            <div className="category-grid-partner">
              <h1 className="category-grid-text">{props.heading112}</h1>
            </div>
          </Link>
          <div className="category-grid-grid-part">
            <div className="category-grid-container3">
              <Link to="/marketplace" className="category-grid-navlink1">
                <div className="category-grid-marketplace">
                  <h1 className="category-grid-text1">{props.heading12}</h1>
                </div>
              </Link>
              <Link to="/resource-finder" className="category-grid-navlink2">
                <div className="category-grid-resource">
                  <h1 className="category-grid-text2">{props.heading2}</h1>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/subscription-package" className="">
            <div className="category-grid-subcription">
              <h1 className="category-grid-text3">{props.heading1111}</h1>
            </div>
          </Link>
        </div>
        <div className="category-grid-container4">
          <Link to="/navigation-map" className="category-grid-navlink4">
            <div className="category-grid-navigation">
              <h1 className="category-grid-text4">{props.heading111111}</h1>
            </div>
          </Link>
          <Link to="/budget-buddy" className="category-grid-navlink5">
            <div className="category-grid-budget">
              <h1 className="category-grid-text5">{props.heading111121}</h1>
            </div>
          </Link>
          <Link to="/rewards" className="category-grid-navlink5">
            <div className="category-grid-budget">
              <h1 className="category-grid-text5">{props.rewards}</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

CategoryGrid.defaultProps = {
  heading11: 'StudyBuddy',
  rootClassName1: '',
  heading2: 'ExploreResources',
  rootClassName: '',
  text1: 'Text',
  heading112: 'StudyBuddy',
  heading1: 'MarketMingle',
  heading: 'ExploreResources',
  text: 'StudyBuddy',
  heading12: 'MarketMingle',
  heading111111: 'CampusCompass',
  heading111: 'PackPal',
  heading111121: 'BudgetBuddy',
  heading1111: 'PackPal',
  heading11111: 'CampusCompass',
  heading11112: 'BudgetBuddy',
  rewards: 'TreatTrove',
}

CategoryGrid.propTypes = {
  heading11: PropTypes.string,
  rootClassName1: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  heading112: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  heading12: PropTypes.string,
  heading111111: PropTypes.string,
  heading111: PropTypes.string,
  heading111121: PropTypes.string,
  heading1111: PropTypes.string,
  heading11111: PropTypes.string,
  heading11112: PropTypes.string,
}

export default CategoryGrid