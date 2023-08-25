import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGsYpuBJKfxizQ7uGrG-mqfxpxBDg4p14",
  authDomain: "house-marketplace-app-3b952.firebaseapp.com",
  projectId: "house-marketplace-app-3b952",
  storageBucket: "house-marketplace-app-3b952.appspot.com",
  messagingSenderId: "637852698764",
  appId: "1:637852698764:web:83d986b0c7960b0fd4d3a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore();