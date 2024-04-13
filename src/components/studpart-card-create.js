import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component3 from './component3';
import { collection, addDoc, Timestamp, setDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebase';
import './studpart-card-create.css';

const StudpartCardCreate = (props) => {
  const [name, setName] = useState('');
  const [requestText, setRequestText] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = await getDoc(doc(db, 'users', user.uid)); // Use getDoc for initial data
          if (docRef.exists()) {
            const userData = docRef.data();
            setName(userData.name);
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No user logged in.');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const requestData = {
          userId: user.uid,
          name: name, // Assuming name might be updated during request creation
          requestText: requestText,
          timestamp: Timestamp.now(),
        };

        // Add request to user's requests collection
        await addDoc(collection(db, 'requests'), requestData); // Fixed collection name
        console.log('Request submitted successfully!');

        // Additional logic (success message, redirect, etc.)
      } else {
        console.log('No user logged in.');
      }
    } catch (error) {
      console.error('Error submitting request: ', error);
      // Handle errors for addDoc and setDoc
    }
  };

  return (
    <div className={`studpart-card-create-container ${props.rootClassName}`}>
      <div className="studpart-card-create-blog-post-card">
        <Component3
          rootClassName="component3-root-class-name"
          className=""
        />
        <div className="studpart-card-create-container1">
          <div className="studpart-card-create-container2">
            <span className="studpart-card-create-text">Create Request</span>
          </div>
          <div className="studpart-card-create-container3">
            <div className="studpart-card-create-container4">
              <div className="studpart-card-create-container5">
                <h1 className="studpart-card-create-text1">{name}</h1>
              </div>
            </div>
          </div>
          <span className="studpart-card-create-text2">
            What are you requesting for?
          </span>
          <textarea
            placeholder={props.textareaPlaceholder}
            className="studpart-card-create-textarea textarea"
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
          />
          <button
            type="button"
            className="studpart-card-create-button button"
            onClick={handleSubmit}
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

StudpartCardCreate.defaultProps = {
  textareaPlaceholder: 'Write Your Request here.',
  button1: 'Upload Photo',
  text1: 'Green Flag',
  heading: 'Name',
  textinputPlaceholder: 'Write Your Request here.',
  button: 'Submit',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
  rootClassName: '',
  heading1: 'Bio',
  text: 'Red Flag',
};

StudpartCardCreate.propTypes = {
  textareaPlaceholder: PropTypes.string,
  button1: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
};

export default StudpartCardCreate;
