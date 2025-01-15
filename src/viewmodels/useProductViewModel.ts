// src/viewModels/useProductViewModel.ts

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/reducers/productReducer';
import { getProducts } from '../services/api';
import { RootState } from '../store';
import { Product } from '../models/Product';

export const useProductViewModel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await getProducts();
        dispatch(setProducts(fetchedProducts));
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return { products };
};
