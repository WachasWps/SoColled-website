import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Import auth and db from firebase.js

import './register-form.css';

const RegisterForm = ({ history, ...props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [description, setDescription] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        // Add additional user information to Firestore
        setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: email,
          mobile: mobile,
          college: collegeName,
          description: description,
        })
        .then(() => {
          console.log('User information added to Firestore');
          // Redirect to home page after successful registration
          history.push('/home');
        })
        .catch((error) => {
          // Handle Firestore errors
          console.error('Error adding user information to Firestore: ', error);
          setError('Error adding user information to Firestore');
        });
      })
      .catch((error) => {
        // Handle authentication errors
        console.error('Error creating user:', error.message);
        setError(error.message);
      });
  };

  return (
    <div className={`register-form-container ${props.rootClassName}`}>
      <div className="register-form-blog-post-card">
        <div className="register-form-container01">
          <div className="register-form-container02">
            <div className="register-form-container03">
              <span className="register-form-create-your-profile">
                Create Your Profile
              </span>
              <br />
            </div>
            <div className="register-form-container04">
              <div className="register-form-container05">
                <input
                  type="text"
                  name="Name"
                  placeholder={props.nameInput}
                  className="register-form-name-input input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <input
                type="tel"
                name="Number"
                placeholder={props.phoneInput}
                className="register-form-input input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="register-form-container06">
              <input
                type="email"
                name="email"
                placeholder={props.emailInput}
                className="register-form-textinput input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="College"
                placeholder={props.collegeInput1}
                className="register-form-textinput1 input"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <div className="register-form-container07">
              <textarea
                placeholder={props.describeArea}
                className="register-form-textarea textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <input
              type="password"
              placeholder={props.passwordlnput}
              name="Password"
              className="register-form-textinput2 input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="register-form-error">{error}</p>}
            <div className="register-form-container08">
              <button type="button" className="register-form-button button" onClick={handleRegister}>
                {props.button}
              </button>
            </div>
            <div className="register-form-container09">
              <span className="register-form-text2">
                Already have an account?{' '}
              </span>
              <Link to="/login" className="register-form-navlink">
                {props.logintext}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterForm.defaultProps = {
  describeArea: 'Describe Yourself...',
  button: 'Register',
  emailInput: 'Enter Email',
  nameInput: 'Enter Name',
  logintext: 'Login',
  phoneInput: 'Enter Mobile No.',
  rootClassName: '',
  rootClassName1: '',
  passwordlnput: 'Enter Password',
  collegeInput1: 'Enter College Name',
};

RegisterForm.propTypes = {
  describeArea: PropTypes.string,
  button: PropTypes.string,
  emailInput: PropTypes.string,
  nameInput: PropTypes.string,
  logintext: PropTypes.string,
  phoneInput: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  passwordlnput: PropTypes.string,
  collegeInput1: PropTypes.string,
};

export default RegisterForm;
