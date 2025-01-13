import { useState, useEffect } from 'react';
import { fetchProducts } from '../models/ProductModel';

const useProductViewModel = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []); // Empty array means this effect runs only once on mount

  return { products, isLoading, error };
};

export default useProductViewModel;
