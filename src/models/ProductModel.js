import axios from 'axios';

const API_URL = 'https://fakestoreapi.in/api/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    //const response = await fetch(API_URL)
    if (response.status === 200) {
      return response.data.products;
    }
    //console.log("response", response)
    throw new Error('Failed to fetch products');
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
