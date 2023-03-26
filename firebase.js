// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCMCZPhxP8yeW5o3JAmIJ_EGW3U250rIGg",

  authDomain: "hallowed-scene-330013.firebaseapp.com",

  projectId: "hallowed-scene-330013",

  storageBucket: "hallowed-scene-330013.appspot.com",

  messagingSenderId: "242399349460",

  appId: "1:242399349460:web:8b901ea26aa1d235d24941",

  measurementId: "G-JFD4NMTXN6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app); 