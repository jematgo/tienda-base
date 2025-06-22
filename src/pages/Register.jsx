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
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      alert("Error al registrarse")
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Crear cuenta</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
  )
}
