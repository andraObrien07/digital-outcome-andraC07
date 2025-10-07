// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDoc, doc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut } from 'firebase/auth'
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
    if (!user.uid) {
        console.error("no user logged in")
        return
    }
    const personDoc = await setDoc(doc(db, 'landScape', user.uid), landScape)
}

// Gets the logged in person's bests from the database.
export async function getfarms() {
    if (!user.uid) {
        console.error("No user logged in!")
        return
    }

    // Get the bests document for the given UID
    const landRef = doc(db, 'landScape', user.uid)
    const landSnap = await getDoc(landRef)
    if (landSnap.exists()) {
        // Get the bests data from the snapshot
        const landData = landSnap.data()

        // and set the bests state with the data
        landScape.uid = landData.uid
        console.dir(landData)

        landScape.nameFarm = landData.nameFarm
        landScape.farmSize = landData.farmSize
        landScape.herds = landData.herds
        landScape.paddocks = landData.paddocks
        landScape.fertHistory = landData.fertHistory

    } else {
        alert('No saved landscape!')
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
    //saving the user data on firebase and login on lapot
    localStorage.setItem('user', data)
    // Set the bests state with the logged in user's UID
    await getfarms()
}

// Signs out the current user.
export async function logout() {
    user.uid = null
    user.email = null
    user.displayName = null
    user.photoURL = null
    localStorage.removeItem('user')

    await signOut(auth)
}

