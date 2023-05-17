import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRAZEbScbUf1R373HfSkeMFDnvr-Y5bU8",
  authDomain: "first-project-96e8c.firebaseapp.com",
  projectId: "first-project-96e8c",
  storageBucket: "first-project-96e8c.appspot.com",
  messagingSenderId: "91488339726",
  appId: "1:91488339726:web:587bd489617826e287f95f",
  measurementId: "G-B8E5PG8VS5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
