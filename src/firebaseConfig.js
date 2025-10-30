import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6A2IP9Inrzar-WtUxS6VBfYc37cX6ugA",
  authDomain: "branice-motors.firebaseapp.com",
  projectId: "branice-motors",
  storageBucket: "branice-motors.firebasestorage.app",
  messagingSenderId: "189876248947",
  appId: "1:189876248947:web:971612e0d4fdb8c5756506",
  measurementId: "G-X0CFK4H1V8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);