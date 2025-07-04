import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catálogo</h2>
      <div className="row">
        {products.map(prod => (
          <div key={prod.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {prod.imageURL && (
                <img src={prod.imageURL} alt={prod.name} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
              )}
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-text fw-bold">${prod.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}