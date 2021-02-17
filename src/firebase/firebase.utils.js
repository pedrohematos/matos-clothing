import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKsJhR2ps-qVX2VFwmum4Un6u6mOdoLEE",
  authDomain: "crwn-db-b647c.firebaseapp.com",
  projectId: "crwn-db-b647c",
  storageBucket: "crwn-db-b647c.appspot.com",
  messagingSenderId: "671158801131",
  appId: "1:671158801131:web:4e249862d122e56bd824ae",
  measurementId: "G-P7RR7JXD52",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
