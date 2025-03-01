import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG47qzu7cGZwfhomStouHxoOMYXHNqokA",
  authDomain: "airbnb-fe582.firebaseapp.com",
  projectId: "airbnb-fe582",
  storageBucket: "airbnb-fe582.firebasestorage.app",
  messagingSenderId: "743160848814",
  appId: "1:743160848814:web:ae5244c05beed919c6e83f",
};

const app = initializeApp(firebaseConfig);
export const authGoogle = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(authGoogle, provider);
};
