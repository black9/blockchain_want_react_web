import firebase from "firebase";
import "firebase/firestore";

// add your firebase configure
const firebaseConfig = {
  apiKey: "AIzaSyD5aXH1cv5KCigqonYq4s0UXAvzn7eTQ7Y",
  authDomain: "board-19d02.firebaseapp.com",
  databaseURL: "https://board-19d02.firebaseapp.com",
  projectId: "board-19d02",
  storageBucket: "",
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;
