// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebase.config";

// ================= commented config Start========================================
// const initializeAuthentication=()=>{
//     initializeApp(firebaseConfig);
// }
//================================================================================
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_FIREBASE_APP_ID,
//   };
// ================= commented config End=========================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;