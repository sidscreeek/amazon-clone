import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCZeih3xV9VGug-oBEkfoJ45FGCa7qA-7I",
    authDomain: "clone-b6f34.firebaseapp.com",
    projectId: "clone-b6f34",
    storageBucket: "clone-b6f34.appspot.com",
    messagingSenderId: "470949398009",
    appId: "1:470949398009:web:c0cd3509a1dcab2cd9e928",
    measurementId: "G-9LRJZ01TGG"
});


const auth = firebaseApp.auth();

export {auth};