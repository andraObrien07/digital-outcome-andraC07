// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { user, landScape } from '$lib/state.svelte.js'

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

// Saves a bests object to the database with the UID of the person as the ID.
export async function addfarm() {
    const personDoc = await addDoc(collection(db, 'landScape', user.uid), landScape)
}

// Gets the logged in person's bests from the database.
export async function getfarms() {
    // Get the bests document for the given UID
    const bestRef = doc(db, 'landScape', user.uid)
    const bestSnap = await getDoc(bestRef)
    if (bestSnap.exists()) {
        // Get the bests data from the snapshot
        const bestData = bestSnap.data()

        // and set the bests state with the data
        landScape.uid = bestData.uid
        // bests.olympicLifts = bestData.olympicLifts

    } else {
        alert('No saved bests!')
    }
}

// Signs in a user with Google authentication.
export async function login() {
    // Sign in with Google
    const result = await signInWithPopup(auth, provider)
    // Set the user state with the logged in user's information so that it can be used in the app
    user.uid = result.user.uid
    user.email = result.user.email
    user.displayName = result.user.displayName
    user.photoURL = result.user.photoURL
    // Save the person state to local storage as well so that it persists across page reloads
    let data = JSON.stringify(user)
    localStorage.setItem('user', data)
    // Set the bests state with the logged in user's UID
    getfarms()

    //  Return the user info for use in UI
    // return {
    //     uid: result.user.uid,
    //     email: result.user.email,
    //     displayName: result.user.displayName,
    //     photoURL: result.user.photoURL
    // };
}

// Signs out the current user.
export async function logout() {
    user.uid = null
    user.email = null
    user.displayName = null
    user.photoURL = null
    resetCharacter()
    localStorage.removeItem('user')
    await signOut(auth)
}

