import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAAfaupiKts2BOUYdEmVqDbWwZAxOMg07o",
  authDomain: "project-management-b0be2.firebaseapp.com",
  projectId: "project-management-b0be2",
  storageBucket: "project-management-b0be2.appspot.com",
  messagingSenderId: "932661143600",
  appId: "1:932661143600:web:e15e959d9c98b7036165f5",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
