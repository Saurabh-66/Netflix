import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need to config here

// Config details are deliberately removed for authentication to remain secure
const config = {
    apiKey: "AIzaSyB9EvCeloLB4gZFUTftyESZGIt2xybDvuA",
    authDomain: "netflix-790d2.firebaseapp.com",
    databaseURL: "https://netflix-790d2.firebaseio.com",
    projectId: "netflix-790d2",
    storageBucket: "netflix-790d2.appspot.com",
    messagingSenderId: "699580678602",
    appId: "1:699580678602:web:bcd01034a5c3d7755c4f33",
    measurementId: "G-R8356X4SL1"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
