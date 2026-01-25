// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGTMxmK6s7rxLJcs0ge5KT9K3hPuUqi8",
  authDomain: "shelfly-auth.firebaseapp.com",
  projectId: "shelfly-auth",
  storageBucket: "shelfly-auth.firebasestorage.app",
  messagingSenderId: "772903468541",
  appId: "1:772903468541:web:3cdd882ea6e4c36ff02d94",
  measurementId: "G-747YKKFTJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);