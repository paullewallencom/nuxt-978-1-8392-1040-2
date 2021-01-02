import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyCeb97VeWrNQHBKjZnr7t0XIfE2TskPHM8",
    authDomain: "nuxt-news-feed.firebaseapp.com",
    databaseURL: "https://nuxt-news-feed.firebaseio.com",
    projectId: "nuxt-news-feed",
    storageBucket: "nuxt-news-feed.appspot.com",
    messagingSenderId: "550097817920"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

const db = firebase.firestore();

export default db;
