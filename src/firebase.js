import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyVFeclXQ0sD7ZqxfkuZ2gwrhDuBrCsp8",
  authDomain: "clone-f15a0.firebaseapp.com",
  projectId: "clone-f15a0",
  storageBucket: "clone-f15a0.appspot.com",
  messagingSenderId: "133801669456",
  appId: "1:133801669456:web:d3ee99e1c365ffb709b255",
  measurementId: "G-9NZQ8GWY47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
