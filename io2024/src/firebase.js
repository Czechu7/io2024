// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtkn8YmawC_QMA7SVW1bXJC2iZ283Ad_s",
  authDomain: "carmategarage-58a29.firebaseapp.com",
  projectId: "carmategarage-58a29",
  storageBucket: "carmategarage-58a29.appspot.com",
  messagingSenderId: "510328948427",
  appId: "1:510328948427:web:6a41a9f5810d45791dbd4e",
  measurementId: "G-GREHXY867K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };