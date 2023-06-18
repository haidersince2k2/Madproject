// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyC8RW82TKy17ISW6uDDTEoR09iUSy7TqME",
  authDomain: "project-3eb47.firebaseapp.com",
  projectId: "project-3eb47",
  storageBucket: "project-3eb47.appspot.com",
  messagingSenderId: "630360337695",
  appId: "1:630360337695:web:93602289ee4ed743df142a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
