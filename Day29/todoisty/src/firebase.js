import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCazyxSdXs5TOL9NB--DB3Pz_4ef80nC2g",
    authDomain: "todoist-2c788.firebaseapp.com",
    databaseURL: "https://todoist-2c788.firebaseio.com",
    projectId: "todoist-2c788",
    storageBucket: "todoist-2c788.appspot.com",
    messagingSenderId: "442816224120",
    appId: "1:442816224120:web:03bd22d56d06e33655468d"
});

export { firebaseConfig as firebase }