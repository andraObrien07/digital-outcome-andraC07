// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'

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



// Saves a person object to the database.

export async function addClassroom(classroom) {

    const personDoc = await addDoc(collection(db, 'classrooms'), classroom)
}

// Gets all the classrooms from the database.
const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
export async function getClassrooms() {

    let classroomDocs = await getDocs(collection(db, 'classrooms'))

    let classrooms = []
    classroomDocs.forEach((classroomDoc) => {
        classrooms = [...classrooms, classroomDoc.data()]
    })

    return classrooms
}
