import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFgj9G8MZ7lT394Md0gKvr7WMiHwVyaKs",
  authDomain: "task-668b3.firebaseapp.com",
  databaseURL: "https://task-668b3-default-rtdb.firebaseio.com",
  projectId: "task-668b3",
  storageBucket: "task-668b3.firebasestorage.app",
  messagingSenderId: "102292659020",
  appId: "1:102292659020:web:a27cfb5a15e33536eecde9",
  measurementId: "G-6ZN7RMPCWP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
