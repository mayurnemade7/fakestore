import axios from 'axios';
import { Product } from '../models/Product';

const API_URL = 'https://fakestoreapi.in/api';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductDetails = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null!;
  }
};
