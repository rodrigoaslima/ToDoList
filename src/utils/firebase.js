import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsxtf2X31VfNcPXXj12mm_bCJPgzqQHpY",
    authDomain: "todo-list-firebase-b98c4.firebaseapp.com",
    databaseURL: "https://todo-list-firebase-b98c4.firebaseio.com",
    projectId: "todo-list-firebase-b98c4",
    storageBucket: "todo-list-firebase-b98c4.appspot.com",
    messagingSenderId: "254364425618",
    appId: "1:254364425618:web:e02b40dd757c728087b54b"
};

firebase.initializeApp(firebaseConfig);
export const Api = firebase;