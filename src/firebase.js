// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {

  // apiKey: "AIzaSyCMCZPhxP8yeW5o3JAmIJ_EGW3U250rIGg",

  // authDomain: "hallowed-scene-330013.firebaseapp.com",

  // projectId: "hallowed-scene-330013",

  // storageBucket: "hallowed-scene-330013.appspot.com",

  // messagingSenderId: "242399349460",

  // appId: "1:242399349460:web:8b901ea26aa1d235d24941",

  // measurementId: "G-JFD4NMTXN6"

// };


// // Initialize Firebase

// export const app = initializeApp(firebaseConfig);

// 

// export const auth = getAuth(app); 


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRP0I_4UnDC1SdXDpRhZI29x9Gr3121m0",
  authDomain: "react-auth-cardiocare.firebaseapp.com",
  projectId: "react-auth-cardiocare",
  storageBucket: "react-auth-cardiocare.appspot.com",
  messagingSenderId: "51072271801",
  appId: "1:51072271801:web:dbecbb8e4c000143c2a268"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);