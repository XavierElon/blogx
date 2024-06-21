// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: 'alpha-brogrammer.firebaseapp.com',
  projectId: 'alpha-brogrammer',
  storageBucket: 'alpha-brogrammer.appspot.com',
  messagingSenderId: '61777701739',
  appId: '1:61777701739:web:c49c189cffdb94aa16fa2e',
  measurementId: 'G-7N2GTXGQBZ'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
