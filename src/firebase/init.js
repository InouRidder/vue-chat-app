import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBXdNnH-jz93HQOaay1RUP_3qOwoCxAZF8",
  authDomain: "vue-chat-app-a6d80.firebaseapp.com",
  databaseURL: "https://vue-chat-app-a6d80.firebaseio.com",
  projectId: "vue-chat-app-a6d80",
  storageBucket: "vue-chat-app-a6d80.appspot.com",
  messagingSenderId: "498906459406"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});
export default firebaseApp.firestore();
