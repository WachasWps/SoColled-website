import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CustomPackageForm from '../components/custom-package-form'
import Footer from '../components/footer'
import './custom-package-page.css'

const CustomPackagePage = (props) => {
  return (
    <div className="custom-package-page-container">
      <Helmet>
        <title>Custom-Package-Page - SoCollEd</title>
        <meta property="og:title" content="Custom-Package-Page - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name15"></Header>
      <CustomPackageForm rootClassName="custom-package-form-root-class-name"></CustomPackageForm>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default CustomPackagePage
