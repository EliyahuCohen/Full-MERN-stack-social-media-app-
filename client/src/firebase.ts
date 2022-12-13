// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtbDK5E2iwSkX2-cgMmEqdoRWBmrXFQlg",
  authDomain: "eliyahumernsocial.firebaseapp.com",
  projectId: "eliyahumernsocial",
  storageBucket: "eliyahumernsocial.appspot.com",
  messagingSenderId: "737726595355",
  appId: "1:737726595355:web:2d1b72f0556a7e1b3793be",
  measurementId: "G-6ZJTZRBWD3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
