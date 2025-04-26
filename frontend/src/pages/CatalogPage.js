import { useEffect, useState } from 'react';
import API from '../api/api';
import ProductCard from '../components/ProductCard';

function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="catalog">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default CatalogPage;
