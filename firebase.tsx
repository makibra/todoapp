import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNSUO6gcR4PVDzQctukYVDA_4VoTFbL0I",
  authDomain: "todo-ab9e0.firebaseapp.com",
  projectId: "todo-ab9e0",
  storageBucket: "todo-ab9e0.appspot.com",
  messagingSenderId: "935503672932",
  appId: "1:935503672932:web:bfa9bbcaf0e70d6de35171",
  measurementId: "G-D3CY29CFGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);