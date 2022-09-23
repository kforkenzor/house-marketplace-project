// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3Pep5aoaYz_DyPWTmDvoqPXexPYYPd_A',
  authDomain: 'house-marketplace-app-38f96.firebaseapp.com',
  projectId: 'house-marketplace-app-38f96',
  storageBucket: 'house-marketplace-app-38f96.appspot.com',
  messagingSenderId: '278981119698',
  appId: '1:278981119698:web:fc5771c80bb80660ade70b',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
