import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import LoginForm from '../components/login-form'
import Footer from '../components/footer'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - SoCollEd</title>
        <meta property="og:title" content="Login - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name12"></Header>
      <LoginForm rootClassName="login-form-root-class-name"></LoginForm>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default Login
