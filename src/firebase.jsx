// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeqTg0XL4nQK78UgeMPmrEL0oFbVvI0Cs",
  authDomain: "bell-b451b.firebaseapp.com",
  projectId: "bell-b451b",
  storageBucket: "bell-b451b.appspot.com",
  messagingSenderId: "69556658272",
  appId: "1:69556658272:web:6e5ea64d1f75ae13ce2305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);