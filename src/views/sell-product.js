import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, db } from '../components/firebase';
import { setDoc, doc, collection } from "firebase/firestore";

import Header from '../components/header';
import Footer from '../components/footer';
import './sell-product.css';

const SELLPRODUCT = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const handlePostAd = async () => {
    const user = auth.currentUser;

    // Ensure all fields are filled
    if (!title || !description || !price || photos.length === 0) {
      setError('Please fill in all the required fields.');
      return;
    }

    try {
      // Add the ad to the 'product' collection under the user's document
      const userProductRef = collection(db, `users/${user.uid}/product`);
      await setDoc(doc(userProductRef), {
        title: title,
        description: description,
        price: price,
        photos: photos,
      });
      
      console.log('Product information added to Firestore');
      // Redirect to the marketplace after posting the ad
      props.history.push('/marketplace');
    } catch (error) {
      console.error('Error posting product to Firestore: ', error);
      setError(error.message);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhotos([...photos, reader.result]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="sellproduct-container">
      <Helmet>
        <title>SELL-PRODUCT - SoCollEd</title>
        <meta property="og:title" content="SELL-PRODUCT - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name16" />
      <h1 className="sellproduct-text">POST YOUR PRODUCT</h1>
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
            placeholder="Enter product title"
            className="input sellproduct-textinput1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="sellproduct-ad-title1">Product Title</span>
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
        <div className="sellproduct-upload-photo">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>
        <span className="sellproduct-text2">Upload Photos</span>
        <Link to="/marketplace" className="sellproduct-navlink button" onClick={handlePostAd}>
          Post Product
        </Link>
        {error && <p className="sellproduct-error">{error}</p>}
      </div>
      <Footer rootClassName="footer-root-class-name17" />
    </div>
  );
};

export default SELLPRODUCT;
