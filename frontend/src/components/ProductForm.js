import { useState } from 'react';
import API from '../api/api';

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/products', formData);
    alert('Product created');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
