// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAyCRQYfqJvrk_TGkPHa_8TMZgZb80YC88',
    authDomain: 'phutho-hotel.firebaseapp.com',
    projectId: 'phutho-hotel',
    storageBucket: 'phutho-hotel.appspot.com',
    messagingSenderId: '556138710058',
    appId: '1:556138710058:web:087b2bfebc3f90515aef53',
    measurementId: 'G-Y4ENR64RY0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
