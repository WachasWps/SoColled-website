import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, db } from '../components/firebase';
import { setDoc, doc } from "firebase/firestore";

import Header from '../components/header';
import Component4 from '../components/component4';
import AddPrice from '../components/add-price';
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
      <header data-role="Header" className="sellproduct-header">
        <svg viewBox="0 0 1024 1024" className="sellproduct-icon">
          {/* Your SVG icon */}
        </svg>
      </header>
      <h1 className="sellproduct-text">POST YOUR AD</h1>
      <div className="sellproduct-hero">
        <span className="sellproduct-text1">INCLUDE SOME DETAILS</span>
        <Component4 rootClassName="component4-root-class-name1" />
        <AddPrice
          rootClassName="add-price-root-class-name"
          // Handling price input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="sellproduct-set-a-price">
          <input
            type="number"
            placeholder="Enter price"
            className="input sellproduct-textinput"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="sellproduct-ad-title">Price</span>
          <span className="sellproduct-important">*</span>
        </div>
        <label className="sellproduct-text2" htmlFor="upload-photos">
          Upload Photos
        </label>
        <input
          type="file"
          id="upload-photos"
          className="sellproduct-upload-photos"
          accept="image/*"
          multiple
          onChange={(e) => setPhotos(Array.from(e.target.files))}
        />
        <div className="sellproduct-choose-file">
          <label htmlFor="file-path" className="sellproduct-text3">Choose File:</label>
          <input type="text" id="file-path" className="sellproduct-file-path" />
        </div>
        <Link to="/marketplace" className="sellproduct-navlink button" onClick={handlePostAd}>
          Post Ad
        </Link>
        {error && <p className="sellproduct-error">{error}</p>}
      </div>
      <div className="sellproduct-footer"></div>
      <Footer rootClassName="footer-root-class-name17" />
    </div>
  );
};

export default SELLPRODUCT;
