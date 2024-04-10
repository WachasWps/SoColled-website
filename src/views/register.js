import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RegisterForm from '../components/register-form'
import Footer from '../components/footer'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - SoCollEd</title>
        <meta property="og:title" content="Register - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <RegisterForm rootClassName="register-form-root-class-name"></RegisterForm>
      <img
        alt="image"
        src="/whatsapp_image_2024-04-04_at_11.06.35_pm-removebg-preview-200w.png"
        className="register-image"
      />
      <Footer rootClassName="footer-root-class-name12"></Footer>
      <img
        alt="image"
        src="/external/whatsapp_image_2024-04-03_at_2.29.28_pm-removebg-preview-200h.png"
        className="register-image1"
      />
    </div>
  )
}

export default Register
