// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { user } from '$lib/state.svelte.js'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4MqlqQmobBpVa0wJYJfadDzxCjcjRD34",
    authDomain: "greenpatch-54dcc.firebaseapp.com",
    projectId: "greenpatch-54dcc",
    storageBucket: "greenpatch-54dcc.firebasestorage.app",
    messagingSenderId: "887943610273",
    appId: "1:887943610273:web:5b2d6d87977aa8a2b815e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize CLoud Firebase and get reference to service
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Saves a person object to the database.

export async function addfarm(farm) {
    const personDoc = await addDoc(collection(db, 'farms'), farm)
}

export async function getfarms() {
    let farmDocs = await getDocs(collection(db, 'farms'))

    let farms = []
    farmDocs.forEach((farmDoc) => {
        farms = [...farms, farmDoc.data()]
    })

    return farms
}
// Signs in a user with Google authentication.
export async function login() {
    const result = await signInWithPopup(auth, provider)
    user.uid = result.user.uid
    user.email = result.user.email
    user.displayName = result.user.displayName
    user.photoURL = result.user.photoURL

}

// Signs out the current user.
export async function logout() {
    user.uid = null
    user.email = null
    user.displayName = null
    user.photoURL = null

    await signOut(auth)
}