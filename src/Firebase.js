// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv9SHTTIB0FNh0msI5998XUVleIWJWgXE",
  authDomain: "chat-app-firebase-2eb78.firebaseapp.com",
  projectId: "chat-app-firebase-2eb78",
  storageBucket: "chat-app-firebase-2eb78.appspot.com",
  messagingSenderId: "890363497995",
  appId: "1:890363497995:web:66818fd5c24f1eb01a410e",
  measurementId: "G-SYPYLPG1CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
