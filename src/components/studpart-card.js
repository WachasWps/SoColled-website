import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import './studpart-card.css';

const StudpartCard = (props) => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // Query for pending requests from other users
          const q = query(collection(db, 'requests'), where('userId', '!=', user.uid));
          const querySnapshot = await getDocs(q);
          const requests = [];
          const requestIds = new Set(); // to track duplicate requests
          querySnapshot.forEach((doc) => {
            const requestId = doc.id;
            if (!requestIds.has(requestId)) {
              requestIds.add(requestId);
              requests.push({ id: requestId, ...doc.data() });
            }
          });
          setPendingRequests(requests);
        } else {
          console.log('No user logged in.');
        }
      } catch (error) {
        console.error('Error fetching pending requests: ', error);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleAccept = async (requestId) => {
    try {
      // Remove the request from the list
      setPendingRequests(pendingRequests.filter((request) => request.id !== requestId));
      // You can add logic here to handle accepting the request, such as updating the database
    } catch (error) {
      console.error('Error accepting request: ', error);
    }
  };

  const handleDecline = async (requestId) => {
    try {
      // Remove the request from the list
      setPendingRequests(pendingRequests.filter((request) => request.id !== requestId));
      // You can add logic here to handle declining the request, such as deleting the request from the database
    } catch (error) {
      console.error('Error declining request: ', error);
    }
  };

  return (
    <ul className={`study-partner-container5 ${props.rootClassName}`}>
      {pendingRequests.map((request) => (
        <li key={request.id} className="studpart-card-feature-card">
          {/* Your existing component content */}
          <div className="studpart-card-container1">
            <h1 className="studpart-card-name">{props.heading}</h1>
            <h1 className="studpart-card-name1">{props.heading1}</h1>
          </div>
          {/* Display pending requests */}
          <div className="pending-requests">
            <h2>Pending Request</h2>
            <strong>{request.type}</strong>: {request.requestText}
          </div>
          {/* Accept and decline buttons */}
          <div className="action-buttons">
            <button onClick={() => handleAccept(request.id)} className="accept-button">
              Green Flag
            </button>
            
          </div>
        </li>
      ))}
    </ul>
  );
};

StudpartCard.defaultProps = {
  button: 'Red Flag',
  text1: 'Green Flag',
  heading: 'Name',
  heading1: 'Bio',
  rootClassName: '',
  button1: 'Green Flag',
  text: 'Red Flag',
  text2: 'mvjfjhbjmvnhjkmcnjckmnvhgjfmnvhcjxk,mfgjkf',
};

StudpartCard.propTypes = {
  button: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
};

export default StudpartCard;

