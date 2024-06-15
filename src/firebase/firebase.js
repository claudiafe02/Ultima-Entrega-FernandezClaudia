// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { collection, getDocs, getFirestore, query,updateDoc, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh99IoZEc1QVJu4ix0nqiNQxLT7PWvIUk",
  authDomain: "cfernandez-ecommerce.firebaseapp.com",
  projectId: "cfernandez-ecommerce",
  storageBucket: "cfernandez-ecommerce.appspot.com",
  messagingSenderId: "365999631987",
  appId: "1:365999631987:web:4fe0179d1998feccc64406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);


