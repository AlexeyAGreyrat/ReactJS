// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA8jtO5DW3C4x7Ddkm6mZ7d_3iitP601vM",
  authDomain: "lab9-87995.firebaseapp.com",
  databaseURL: "https://lab9-87995-default-rtdb.firebaseio.com",
  projectId: "lab9-87995",
  storageBucket: "lab9-87995.appspot.com",
  messagingSenderId: "370905812477",
  appId: "1:370905812477:web:8b234e775a4bd59dd55d94"
};

export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;
