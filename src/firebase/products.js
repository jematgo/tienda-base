import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log('Producto guardado con ID:', docRef.id);
  } catch (error) {
    console.error('Error al guardar producto:', error);
  }
};