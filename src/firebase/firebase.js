import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3rq-1eAIRdELtShn7CJngyHtC8YICdN8",
  authDomain: "react-redux-8ddaf.firebaseapp.com",
  projectId: "react-redux-8ddaf",
  storageBucket: "react-redux-8ddaf.appspot.com",
  messagingSenderId: "565348454994",
  appId: "1:565348454994:web:272c3bc6cdf96decf1058b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const dataBase = firebase.firestore();
const storage = firebase.storage();

export { auth, firebase, dataBase, storage };
