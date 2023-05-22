
//v9 compat packages
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARp36NdK6VfeUh7xX2lQZDERozmKFVemY",
  authDomain: "bep-quiz.firebaseapp.com",
  projectId: "bep-quiz",
  storageBucket: "bep-quiz.appspot.com",
  messagingSenderId: "737455980508",
  appId: "1:737455980508:web:795af466468450ae819919",
  measurementId: "G-W49TPY883K"
};

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });

const app = firebase.initializeApp(firebaseConfig)

export default app;