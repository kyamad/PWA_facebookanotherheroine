// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5CbHVOg2wOadrVm0uR6T16-1byLDpGKw",
  authDomain: "amateras-952e1.firebaseapp.com",
  databaseURL: "https://amateras-952e1-default-rtdb.firebaseio.com",
  projectId: "amateras-952e1",
  storageBucket: "amateras-952e1.appspot.com",
  messagingSenderId: "35101112851",
  appId: "1:35101112851:web:ece32e9adab41d09369de6",
  measurementId: "G-GDEHR0NXBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);