// Firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDZDHqTEWevpfrZ0mliifEQCRfULkyknaE",
  authDomain: "aura-b7990.firebaseapp.com",
  projectId: "aura-b7990",
  storageBucket: "aura-b7990.appspot.com",
  messagingSenderId: "99533004520",
  appId: "1:99533004520:web:453a7a1e91e30e77aaf35d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth, app };
