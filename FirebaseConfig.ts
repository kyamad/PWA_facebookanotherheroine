import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storsge = getStorage(app);
const storageRef = ref;
const analytics = getAnalytics(app);

export { auth, storsge, storageRef };

// export default firebaseConfig;