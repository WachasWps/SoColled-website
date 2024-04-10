import React from 'react'

import { Helmet } from 'react-helmet'

import StudpartCard from '../components/studpart-card'
import './list-try.css'

const ListTry = (props) => {
  return (
    <div className="list-try-container">
      <Helmet>
        <title>list-try - SoCollEd</title>
        <meta property="og:title" content="list-try - SoCollEd" />
      </Helmet>
      <ul className="list">
        <li className="list-item">
          <StudpartCard rootClassName="studpart-card-root-class-name8"></StudpartCard>
        </li>
        <li className="list-item">
          <StudpartCard rootClassName="studpart-card-root-class-name10"></StudpartCard>
        </li>
        <li className="list-item">
          <StudpartCard rootClassName="studpart-card-root-class-name9"></StudpartCard>
        </li>
      </ul>
    </div>
  )
}

export default ListTry
