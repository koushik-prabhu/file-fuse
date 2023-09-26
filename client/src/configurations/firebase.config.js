// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA106klqfEHiRINCOqp9-05TW8oMxHu3OU",
  authDomain: "file-fuse.firebaseapp.com",
  projectId: "file-fuse",
  storageBucket: "file-fuse.appspot.com",
  messagingSenderId: "104981723725",
  appId: "1:104981723725:web:44b9e0b89646f85558fa04",
  measurementId: "G-ZL0ELP3JTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
