// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmyDHBB2QRuth36sBKDWZkt9s0kcsU7H8",
  authDomain: "airbnb-bfa9c.firebaseapp.com",
  projectId: "airbnb-bfa9c",
  storageBucket: "airbnb-bfa9c.appspot.com",
  messagingSenderId: "309813345830",
  appId: "1:309813345830:web:1a79bc649b5a2e091370e7",
  measurementId: "G-WKCCRW9K0E"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const auth = getAuth(Fire);
const db = getFirestore(Fire);
const provider = new GoogleAuthProvider();
// db.settings({ timestampsInSnapshots: true });
export {auth,provider,db}