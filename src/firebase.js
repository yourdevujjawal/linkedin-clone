import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGkL_0w15p3h3cxhiiOdZn-G7vuO4LYkY",
  authDomain: "linkedin-clone-d2e88.firebaseapp.com",
  projectId: "linkedin-clone-d2e88",
  storageBucket: "linkedin-clone-d2e88.appspot.com",
  messagingSenderId: "973068651952",
  appId: "1:973068651952:web:101bc2fbe95a5986ac5a75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
