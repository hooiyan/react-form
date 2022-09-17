// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAesizxz9EMXhJ2kh3bDVDbseYjPthQ9rI',
  authDomain: 'react-form-64048.firebaseapp.com',
  projectId: 'react-form-64048',
  storageBucket: 'react-form-64048.appspot.com',
  messagingSenderId: '920776658948',
  appId: '1:920776658948:web:568f7843f55b33d08be551',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
