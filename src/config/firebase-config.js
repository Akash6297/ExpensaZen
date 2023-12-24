// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWERs5204Fp4gkLKWJ9jP_hfbqhuQQJGY",
  authDomain: "expense-tracker-29238.firebaseapp.com",
  projectId: "expense-tracker-29238",
  storageBucket: "expense-tracker-29238.appspot.com",
  messagingSenderId: "656848042369",
  appId: "1:656848042369:web:397a73124842405f411080"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);