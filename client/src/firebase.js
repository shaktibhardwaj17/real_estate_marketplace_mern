// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-11.firebaseapp.com",
  projectId: "realestate-11",
  storageBucket: "realestate-11.appspot.com",
  messagingSenderId: "847474941845",
  appId: "1:847474941845:web:9654bc703b8ed9317ea09c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);