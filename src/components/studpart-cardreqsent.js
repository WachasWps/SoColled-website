import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import './studpart-cardreqsent.css';

const StudpartCardreqsent = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData.name);
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

    fetchUserName();
  }, []);

  return (
    <div className={`studpart-cardreqsent-container ${props.rootClassName}`}>
      <div className="studpart-cardreqsent-feature-card">
        {/* Component content */}
        <div className="studpart-cardreqsent-container1">
          <div className="studpart-cardreqsent-container2">
            <div className="studpart-cardreqsent-container3">
              <h1 className="studpart-cardreqsent-name">{props.heading}</h1>
              <h1 className="studpart-cardreqsent-name1">{props.heading1}</h1>
            </div>
          </div>
        </div>
        {/* Display user name */}
        <span className="studpart-cardreqsent-text">{userName}</span>
        <div className="studpart-cardreqsent-container4">
          {/* Other content */}
        </div>
      </div>
    </div>
  );
};

StudpartCardreqsent.defaultProps = {
  text: 'Remove',
  text1: 'Green Flag',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
  rootClassName: '',
  heading: 'Name',
  heading1: 'Bio',
  text3: '3 days ago',
};

StudpartCardreqsent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text3: PropTypes.string,
};

export default StudpartCardreqsent;

