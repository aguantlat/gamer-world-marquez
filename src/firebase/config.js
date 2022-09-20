// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwUTuigGqI4jMHSJ2EGYCxDiDLaik4x4",
  authDomain: "maxi-game-store.firebaseapp.com",
  projectId: "maxi-game-store",
  storageBucket: "maxi-game-store.appspot.com",
  messagingSenderId: "744749318660",
  appId: "1:744749318660:web:36b7dd4235e583bd246b51",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
