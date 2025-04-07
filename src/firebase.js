// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLZRSHlFJ1F4Fj4rafw-HyLr5GqS7GxsQ",
  authDomain: "my-project-62c98.firebaseapp.com",
  projectId: "my-project-62c98",
  storageBucket: "my-project-62c98.firebasestorage.app",
  messagingSenderId: "703477407437",
  appId: "1:703477407437:web:bbb18be032a010d2b81384",
  measurementId: "G-9TK1G5DZ7N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Export the services
export { auth, db };