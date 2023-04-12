import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDeXMF1q_nmi9CvTo5KkqT0OfZ2moy5m5k",
  authDomain: "marquis-3638b.firebaseapp.com",
  projectId: "marquis-3638b",
  storageBucket: "marquis-3638b.appspot.com",
  messagingSenderId: "890648934937",
  appId: "1:890648934937:web:5ac5847067ba4c24fbc888",
  measurementId: "G-F9SBQTFPR4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
