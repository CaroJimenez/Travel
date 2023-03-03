// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrk43PVG8vq6TTUVad__zytcAP_i5RjM",
  authDomain: "travel-20213tn053.firebaseapp.com",
  projectId: "travel-20213tn053",
  storageBucket: "travel-20213tn053.appspot.com",
  messagingSenderId: "467727563544",
  appId: "1:467727563544:web:6cf8dd7fb8b96aec2a3c6d"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);