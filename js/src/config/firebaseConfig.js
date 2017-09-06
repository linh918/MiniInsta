import * as firebase from 'firebase';  
var config = {
    apiKey: "AIzaSyDWMQ7MbNA_bdGDEN9hS1tKGfwHp17ignA",
    authDomain: "mini-instagram-9ba8b.firebaseapp.com",
    databaseURL: "https://mini-instagram-9ba8b.firebaseio.com",
    projectId: "mini-instagram-9ba8b",
    storageBucket: "mini-instagram-9ba8b.appspot.com",
    messagingSenderId: "768813406161"
  };
  export const firebaseApp=firebase.initializeApp(config);
