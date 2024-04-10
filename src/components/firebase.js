import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH52Bj2a_g2fG5_DdfK0tnkUTyxDwh9dA",
  authDomain: "socolled-website.firebaseapp.com",
  projectId: "socolled-website",
  storageBucket: "socolled-website.appspot.com",
  messagingSenderId: "894839356820",
  appId: "1:894839356820:web:23514f5e08ad71a575a381",
  measurementId: "G-6PQ8G4B0BP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };