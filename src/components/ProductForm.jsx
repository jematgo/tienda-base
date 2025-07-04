import { useState } from 'react';
import { addProduct } from '../firebase/products';
export default function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      price: parseFloat(form.price)
    };
    await addProduct(newProduct);
    setForm({ name: '', price: '', description: '', imageURL: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
      <input name="price" type="number" placeholder="Precio" value={form.price} onChange={handleChange} />
      <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
      <input name="imageURL" placeholder="URL de imagen" value={form.imageURL} onChange={handleChange} />
      <button type="submit">Guardar producto</button>
    </form>
  );
}