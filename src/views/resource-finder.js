import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'
import './resource-finder.css'

const ResourceFinder = (props) => {
  return (
    <div className="resource-finder-container">
      <Helmet>
        <title>Resource-Finder - SoCollEd</title>
        <meta property="og:title" content="Resource-Finder - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name20"></Header>
      <div className="resource-finder-container1">
        <div className="resource-finder-container2">
          <Card rootClassName="card-root-class-name1"></Card>
          <Card rootClassName="card-root-class-name5"></Card>
          <Card rootClassName="card-root-class-name4"></Card>
        </div>
        <div className="resource-finder-container3">
          <Card rootClassName="card-root-class-name7"></Card>
          <Card rootClassName="card-root-class-name8"></Card>
          <Card rootClassName="card-root-class-name9"></Card>
        </div>
        <div className="resource-finder-container4">
          <Card rootClassName="card-root-class-name2"></Card>
          <Card rootClassName="card-root-class-name3"></Card>
          <Card rootClassName="card-root-class-name6"></Card>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name21"></Footer>
    </div>
  )
}

export default ResourceFinder
