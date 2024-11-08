// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDNbSHEtUL1jqF0mgmM3rnNos7dkoont0",
  authDomain: "cadence-19d83.firebaseapp.com",
  projectId: "cadence-19d83",
  storageBucket: "cadence-19d83.firebasestorage.app",
  messagingSenderId: "160821991984",
  appId: "1:160821991984:web:9a3a704a1ab6ab6ca3abf5",
  measurementId: "G-1SDJW1B2SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
