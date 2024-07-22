// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4VjnKfhlXh5aPvRwIqb5mZRTob6qqLmM",
  authDomain: "tatacliq-bc1c8.firebaseapp.com",
  projectId: "tatacliq-bc1c8",
  storageBucket: "tatacliq-bc1c8.appspot.com",
  messagingSenderId: "150833786735",
  appId: "1:150833786735:web:4b9079b9c1fbcf695e029a",
  measurementId: "G-L558E8MV49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const updateProfile = getFirestore(app);
const auth = getAuth(app);
const provider =new GoogleAuthProvider();

export { auth ,provider};
export default updateProfile;