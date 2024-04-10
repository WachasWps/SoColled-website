import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ResourceCard from '../components/resource-card'
import Footer from '../components/footer'
import './resource-finder.css'

const ResourceFinder = (props) => {
  return (
    <div className="resource-finder-container">
      <Helmet>
        <title>Resource-Finder - SoCollEd</title>
        <meta property="og:title" content="Resource-Finder - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <div className="resource-finder-container1">
        <ResourceCard rootClassName="resource-card-root-class-name"></ResourceCard>
        <ResourceCard rootClassName="resource-card-root-class-name1"></ResourceCard>
        <ResourceCard rootClassName="resource-card-root-class-name2"></ResourceCard>
        <ResourceCard rootClassName="resource-card-root-class-name3"></ResourceCard>
        <ResourceCard rootClassName="resource-card-root-class-name4"></ResourceCard>
        <ResourceCard rootClassName="resource-card-root-class-name5"></ResourceCard>
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default ResourceFinder
