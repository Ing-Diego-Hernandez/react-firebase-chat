import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7d734.firebaseapp.com",
  projectId: "reactchat-7d734",
  storageBucket: "reactchat-7d734.appspot.com",
  messagingSenderId: "18249959413",
  appId: "1:18249959413:web:a129f4f947b2ac973fc2bc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()