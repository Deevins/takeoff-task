import firebase from 'firebase/compat/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import {
  getFirestore,
  getDoc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  where,
  doc,
  deleteDoc,
  orderBy,
  updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

//Initialize authentication instance to authorize users
export const auth = getAuth(firebaseApp)

//Initialize firestore to start working with database
export const firestore = getFirestore(firebaseApp)

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  doc,
  orderBy,
  serverTimestamp
}
