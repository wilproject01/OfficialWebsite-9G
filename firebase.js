// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLhBb3NZunZTo4jDmcT_xxDPjlf-8-wVw",
  authDomain: "website9g-5c911.firebaseapp.com",
  projectId: "website9g-5c911",
  storageBucket: "website9g-5c911.appspot.com",
  messagingSenderId: "587008929108",
  appId: "1:587008929108:web:071d1a28a2cb64a287acc1",
  measurementId: "G-9JJ07GT27G"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();