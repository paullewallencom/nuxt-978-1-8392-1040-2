import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var config = {
    <YOUR-FIREBASE-CONFIG>
  };
  firebase.initializeApp(config);
}

const db = firebase.firestore();

export default db;
