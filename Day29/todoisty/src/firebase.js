import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "<apiKey>",
    authDomain: "<authDomain>.firebaseapp.com",
    databaseURL: "https://<authDomain>.firebaseio.com",
    projectId: "<authDomain>",
    storageBucket: "<authDomain>.appspot.com",
    messagingSenderId: "<messageSenderId>",
    appId: "<appId>"
});

export { firebaseConfig as firebase }