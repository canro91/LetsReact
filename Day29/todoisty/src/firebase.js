import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDFuIfealA97lj-gD9KyKlZVVwwpUh4CaE",
    authDomain: "todoisty.firebaseapp.com",
    databaseURL: "https://todoisty.firebaseio.com",
    projectId: "todoisty",
    storageBucket: "todoisty.appspot.com",
    messagingSenderId: "1088566798310",
    appId: "1:1088566798310:web:117c40454ce2cceb079827"
});

export { firebaseConfig as firebase }