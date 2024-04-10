import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CategoryBudget from '../components/category-budget'
import Footer from '../components/footer'
import './budget-buddy.css'

const BudgetBuddy = (props) => {
  return (
    <div className="budget-buddy-container">
      <Helmet>
        <title>Budget-Buddy - SoCollEd</title>
        <meta property="og:title" content="Budget-Buddy - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name14"></Header>
      <CategoryBudget rootClassName="category-budget-root-class-name"></CategoryBudget>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default BudgetBuddy
