import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, db } from '../components/firebase';
import { setDoc, doc } from "firebase/firestore";

import Header from '../components/header';
import Footer from '../components/footer';
import './sell-product.css';

const SELLPRODUCT = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const handlePostAd = () => {
    const uid = auth.currentUser.uid;

    // Here, we'll ensure that all fields are filled before proceeding to post the ad
    if (!title || !description || !price) {
      setError('Please fill in all the required fields.');
      return;
    }

    setDoc(doc(db, 'ads', uid), {
      title: title,
      description: description,
      price: price,
      photos: photos,
    })
    .then(() => {
      console.log('Ad information added to Firestore');
      // Redirect to the marketplace after posting the ad
      props.history.push('/marketplace');
    })
    .catch((error) => {
      console.error('Error posting ad to Firestore: ', error);
      setError(error.message);
    });
  };

  return (
    <div className="sellproduct-container">
      <Helmet>
        <title>SELL-PRODUCT - SoCollEd</title>
        <meta property="og:title" content="SELL-PRODUCT - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name16" />
      <h1 className="sellproduct-text">POST YOUR AD</h1>
      <div className="sellproduct-hero">
        <span className="sellproduct-text1">INCLUDE SOME DETAILS</span>
        <div className="sellproduct-container01">
          <input
            type="text"
            placeholder="Enter description"
            className="sellproduct-textinput input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="sellproduct-ad-title">Description</span>
          <span className="sellproduct-important">*</span>
        </div>
        <div className="sellproduct-container02">
          <input
            type="text"
            placeholder="Enter ad title"
            className="input sellproduct-textinput1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="sellproduct-ad-title1">Ad Title</span>
          <span className="sellproduct-important1">*</span>
        </div>
        <div className="sellproduct-set-a-price">
          <input
            type="number"
            placeholder="Enter price"
            className="input sellproduct-textinput2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="sellproduct-ad-title2">Price</span>
          <span className="sellproduct-important2">*</span>
        </div>
        <span className="sellproduct-text2">Upload Photos</span>
        <Link to="/marketplace" className="sellproduct-navlink button" onClick={handlePostAd}>
          Post Ad
        </Link>
        {error && <p className="sellproduct-error">{error}</p>}
      </div>
      <Footer rootClassName="footer-root-class-name17" />
    </div>
  );
};

export default SELLPRODUCT;
