import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDBEnzmvobkeIzD0q1DOL0Nq8mdjj0_Hc",
  authDomain: "fridge-poetter.firebaseapp.com",
  databaseURL: "https://fridge-poetter.firebaseio.com",
  projectId: "fridge-poetter",
  storageBucket: "fridge-poetter.appspot.com",
  messagingSenderId: "931987894827",
  appId: "1:931987894827:web:2f39b8b1f56a0c029e306e",
  measurementId: "G-371SESGY2F"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export default firebase;

export default firebaseConfig;
