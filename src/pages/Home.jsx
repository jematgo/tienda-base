import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProductList from '../components/ProductList';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      alert('Error al cerrar sesión');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Bienvenido a la tienda 🛒</h1>

      {user ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span>Sesión activa: {user.email}</span>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
          <ProductList />
        </>
      ) : (
        <div className="alert alert-warning">
          Iniciá sesión para ver y comprar productos.
        </div>
      )}
    </div>
  );
}