import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      alert("Error al iniciar sesi�n")
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar sesi�n</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contrase�a" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
      <p>�No ten�s cuenta? <Link to="/register">Registrate</Link></p>
    </form>
  )
}
