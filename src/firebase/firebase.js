import * as firebase from 'firebase';
var config = {
  apiKey: (process.env.REACT_APP_FIREBASE_API_KEY),
    authDomain: (process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    databaseURL: (process.env.REACT_APP_FIREBASE_DATABASE_URL),
    projectId: (process.env.REACT_APP_FIREBASE_PROJECT_ID),
    storageBucket: (process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: (process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID)
  };
  firebase.initializeApp(config);
  let googleProvider = new firebase.auth.GoogleAuthProvider()
  let database=firebase.database();
 database.ref('ron').remove();
 export {firebase,database,googleProvider};
//  apiKey: (process.env.REACT_APP_FIREBASE_API_KEY),
//     authDomain: (process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
//     databaseURL: (process.env.REACT_APP_FIREBASE_DATABASE_URL),
//     projectId: (process.env.REACT_APP_FIREBASE_PROJECT_ID),
//     storageBucket: (process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
//     messagingSenderId: (process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID)