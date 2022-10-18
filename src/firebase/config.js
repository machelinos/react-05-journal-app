// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getEnvVariables } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { VITE_FIREBASE_API_KEY } = getEnvVariables();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${VITE_FIREBASE_API_KEY}`,
  authDomain: "booking-app-c0b87.firebaseapp.com",
  databaseURL: "https://booking-app-c0b87-default-rtdb.firebaseio.com",
  projectId: "booking-app-c0b87",
  storageBucket: "booking-app-c0b87.appspot.com",
  messagingSenderId: "703645877112",
  appId: "1:703645877112:web:ca58c21ec7d1bb6cb6fe8d"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirestoreDb = getFirestore(FirebaseApp);

