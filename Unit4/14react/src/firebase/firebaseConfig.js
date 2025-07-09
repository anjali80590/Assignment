// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrcuUVhsr8dv5FcMJPz1FKDj4G3YH-K6k",
  authDomain: "project-tracker-app-ccb96.firebaseapp.com",
  databaseURL: "https://project-tracker-app-ccb96-default-rtdb.firebaseio.com", // <--- IMPORTANT
  projectId: "project-tracker-app-ccb96",
  storageBucket: "project-tracker-app-ccb96.appspot.com",
  messagingSenderId: "1035705729232",
  appId: "1:1035705729232:web:d1356f016fd03bd2b6ded5",
  measurementId: "G-DC1XTPBTBW",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
