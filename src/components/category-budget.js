import React from 'react'

import PropTypes from 'prop-types'

import './category-budget.css'

const CategoryBudget = (props) => {
  return (
    <div className={`category-budget-container ${props.rootClassName} `}>
      <div className="category-budget-container1">
        <button type="button" className="category-budget-button button">
          {props.button}
        </button>
        <button type="button" className="category-budget-button1 button">
          {props.button1}
        </button>
        <button type="button" className="category-budget-button2 button">
          {props.button2}
        </button>
      </div>
      <div className="category-budget-container2">
        <div className="category-budget-container3">
          <div className="category-budget-partner">
            <h1 className="">{props.heading112}</h1>
            <h1 className="category-budget-text01">{props.foodcost}</h1>
          </div>
          <div className="category-budget-grid-part">
            <div className="category-budget-container4">
              <div className="category-budget-marketplace">
                <h1 className="category-budget-text02">{props.heading12}</h1>
                <h1 className="category-budget-text03">{props.travelcost}</h1>
              </div>
              <div className="category-budget-resource">
                <h1 className="">{props.heading2}</h1>
                <h1 className="category-budget-text05">{props.foodcost2}</h1>
              </div>
            </div>
          </div>
          <div className="category-budget-subcription">
            <h1 className="category-budget-text06">{props.heading1111}</h1>
            <h1 className="category-budget-text07">{props.foodcost6}</h1>
          </div>
        </div>
        <div className="category-budget-container5">
          <div className="category-budget-navigation">
            <h1 className="">{props.heading111111}</h1>
            <h1 className="category-budget-text09">{props.foodcost3}</h1>
          </div>
          <div className="category-budget-budget">
            <h1 className="">{props.heading111121}</h1>
            <h1 className="category-budget-text11">{props.foodcost4}</h1>
          </div>
          <div className="category-budget-budget1">
            <h1 className="">{props.heading1111211}</h1>
            <h1 className="category-budget-text13">{props.foodcost5}</h1>
          </div>
        </div>
      </div>
      <div className="category-budget-container6">
        <span className="category-budget-text14">{props.text}</span>
        <h1 className="category-budget-text15">{props.heading}</h1>
      </div>
    </div>
  )
}

CategoryBudget.defaultProps = {
  heading1111211: 'Entertainment',
  heading12: 'Travel',
  button1: 'Last Month',
  foodcost: '₹1200',
  button: 'This Month',
  button11: 'Last Month',
  foodcost6: '₹1200',
  text: 'Total Spent',
  foodcost4: '₹1200',
  button21: 'Previous Months',
  heading2: 'Stationery',
  foodcost3: '₹1200',
  heading1111: 'Subscription',
  rootClassName1: '',
  foodcost2: '₹1200',
  foodcost5: '₹1200',
  button3: 'This Month',
  heading111111: 'Miscellaneous',
  button2: 'Previous Months',
  travelcost: '₹1200',
  heading111121: 'Medical',
  heading: '₹12000',
  heading112: 'Food',
  rootClassName: '',
}

CategoryBudget.propTypes = {
  heading1111211: PropTypes.string,
  heading12: PropTypes.string,
  button1: PropTypes.string,
  foodcost: PropTypes.string,
  button: PropTypes.string,
  button11: PropTypes.string,
  foodcost6: PropTypes.string,
  text: PropTypes.string,
  foodcost4: PropTypes.string,
  button21: PropTypes.string,
  heading2: PropTypes.string,
  foodcost3: PropTypes.string,
  heading1111: PropTypes.string,
  rootClassName1: PropTypes.string,
  foodcost2: PropTypes.string,
  foodcost5: PropTypes.string,
  button3: PropTypes.string,
  heading111111: PropTypes.string,
  button2: PropTypes.string,
  travelcost: PropTypes.string,
  heading111121: PropTypes.string,
  heading: PropTypes.string,
  heading112: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CategoryBudget
