import firebase from "firebase/app";
import "firebase/auth";

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

export { auth, firebase };
