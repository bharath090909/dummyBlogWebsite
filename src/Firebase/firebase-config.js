// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADl2LltJ3BVDrLi8luLJNJKCD9NOylCvw",
  authDomain: "blogwebsite-2ba7d.firebaseapp.com",
  projectId: "blogwebsite-2ba7d",
  storageBucket: "blogwebsite-2ba7d.appspot.com",
  messagingSenderId: "223915282649",
  appId: "1:223915282649:web:8ef2e08118022e662aaec8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
