import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import auth from firebase.js

import './login-form.css';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // Get the history object from React Router

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Logged in user:', user);
        // Redirect to the Home component
        history.push('/');
      })
      .catch((error) => {
        // Handle authentication errors
        setError(error.message);
      });
  };

  return (
    <div className={`login-form-container ${props.rootClassName}`}>
      <div className="login-form-container1">
        <div className="login-form-container2">
          <span className="login-form-text">
            <span className="">Login</span>
            <br />
          </span>
        </div>
        <input
          type="email"
          name="email"
          placeholder={props.emailInput}
          className="login-form-textinput input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="login-form-container5">
          <div className="login-form-container6">
            <input
              type="password"
              id="Enter Password"
              cols="Enter College Name"
              name="Password"
              placeholder={props.passwordInput}
              className="login-form-input input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <p className="login-form-error">{error}</p>}
        <div className="login-form-container7">
          <button type="button" className="login-form-button button" onClick={handleLogin}>
            {props.button}
          </button>
        </div>
        <div className="login-form-container8">
          <span className="login-form-text8">{props.text}</span>
          <Link to="/register" className="login-form-navlink">
            {props.text1}
          </Link>
        </div>
      </div>
    </div>
  );
};

LoginForm.defaultProps = {
  rootClassName: '',
  text1: 'Register Now',
  text: 'Not Registered ?',
  passwordInput: 'Enter Password',
  button: 'Login',
  emailInput: 'Enter Email',
};

LoginForm.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  passwordInput: PropTypes.string,
  button: PropTypes.string,
  emailInput: PropTypes.string,
};

export default LoginForm;
