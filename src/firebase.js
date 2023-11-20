 import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpDypW2VcMMfWT0OjDMsTvcaLiBNlh-_Q",
  authDomain: "gossipgirl-68b5d.firebaseapp.com",
  projectId: "gossipgirl-68b5d",
  storageBucket: "gossipgirl-68b5d.appspot.com",
  messagingSenderId: "469741503890",
  appId: "1:469741503890:web:68b0b3450f396ca8adad4b",
  measurementId: "G-ESQBXXTK7Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth, db};