import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBrN43ztXDic5UvAQp8CwHFTdx5dWBA8rw",
  authDomain: "tienda-ventas-base.firebaseapp.com",
  projectId: "tienda-ventas-base",
  storageBucket: "tienda-ventas-base.firebasestorage.app",
  messagingSenderId: "691550866246",
  appId: "1:691550866246:web:64cde6b45dc3ec02477347",
  measurementId: "G-TBQ9KL2EJR"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export { auth, db, analytics }