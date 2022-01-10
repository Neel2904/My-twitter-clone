// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcmXnkmDMsSA08qExLDSh4MzPs33ZjUNY",
  authDomain: "twitter-clone-44465.firebaseapp.com",
  projectId: "twitter-clone-44465",
  storageBucket: "twitter-clone-44465.appspot.com",
  messagingSenderId: "432638957177",
  appId: "1:432638957177:web:7665d739671863362626a8",
  measurementId: "G-6Y5ZE1LJ2N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db