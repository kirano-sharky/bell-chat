// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "put_your_fucking_apiKey",
  authDomain: "bell-b451b.firebaseapp.com",
  projectId: "bell-b451b",
  storageBucket: "bell-b451b.appspot.com",
  messagingSenderId: "bruh is not a id",
  appId: "put_your_fucking_appId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
<<<<<<< HEAD
export const db = getFirestore(app);
=======
>>>>>>> a449461964eb62b36047309a8002a727fa5ddddc
