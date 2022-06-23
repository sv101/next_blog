import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCnY9H5l8eJKTZkoENHPTcux1IBsZaS4pU",  
    authDomain: "nextblog-fda94.firebaseapp.com",  
    projectId: "nextblog-fda94",  
    storageBucket: "nextblog-fda94.appspot.com",  
    messagingSenderId: "769921711060",  
    appId: "1:769921711060:web:6c9f12191ce238942d3441",  
    measurementId: "G-LF70P4MRVN"  
  };

  if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  export const storage = firebase.storage()
  