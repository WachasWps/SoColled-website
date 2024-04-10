import React from 'react'

import PropTypes from 'prop-types'

import MonthCard1 from './month-card1'
import MonthCard from './month-card'
import MonthCard3 from './month-card3'
import MonthCard2 from './month-card2'
import './plans.css'

const Plans = (props) => {
  return (
    <div className={`plans-plans ${props.rootClassName} `}>
      <MonthCard1
        rootClassName="month-card1-root-class-name"
        className=""
      ></MonthCard1>
      <MonthCard
        pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
        rootClassName="rootClassName"
        className=""
      ></MonthCard>
      <MonthCard3
        rootClassName="month-card3-root-class-name"
        className=""
      ></MonthCard3>
      <MonthCard2
        rootClassName="month-card2-root-class-name"
        className=""
      ></MonthCard2>
    </div>
  )
}

Plans.defaultProps = {
  rootClassName: '',
}

Plans.propTypes = {
  rootClassName: PropTypes.string,
}

export default Plans
