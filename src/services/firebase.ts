// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyCSX6LQyRi_EK-DDn15-DmtJU7LhXxzvs4",
  authDomain: "advact-77c4f.firebaseapp.com",
  projectId: "advact-77c4f",
  storageBucket: "advact-77c4f.appspot.com",
  messagingSenderId: "264675297429",
  appId: "1:264675297429:web:1e53513ff9312d0276f39c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
