import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBrAoe_6Kg3H20mQXA3egsnKxNyGfwAo0M",
    authDomain: "todolist-d4c10.firebaseapp.com",
    databaseURL: "https://todolist-d4c10.firebaseio.com",
    projectId: "todolist-d4c10",
    storageBucket: "todolist-d4c10.appspot.com",
    messagingSenderId: "195115915283"
  };
  firebase.initializeApp(config);
  let googleProvider = new firebase.auth.GoogleAuthProvider()
  let database=firebase.database();
 database.ref('ron').remove();
 export {firebase,database,googleProvider};