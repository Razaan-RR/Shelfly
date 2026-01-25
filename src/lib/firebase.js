import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBxGTMxmK6s7rxLJcs0ge5KT9K3hPuUqi8",
  authDomain: "shelfly-auth.firebaseapp.com",
  projectId: "shelfly-auth",
  storageBucket: "shelfly-auth.firebasestorage.app",
  messagingSenderId: "772903468541",
  appId: "1:772903468541:web:3cdd882ea6e4c36ff02d94",
  measurementId: "G-747YKKFTJD"
}

const app = initializeApp(firebaseConfig)

// THIS is what you were missing
export const auth = getAuth(app)
