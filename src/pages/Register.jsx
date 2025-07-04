import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
  e.preventDefault()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
      role: "cliente"
    })

    navigate("/")
  } catch (error) {
    alert("Error al registrarse: " + error.message)
  }
  } }
