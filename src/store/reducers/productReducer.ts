import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';

interface ProductState {
  items: Product[];
  cart: Product[];
}

const initialState: ProductState = {
  items: [],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { setProducts, addToCart, removeFromCart } = productSlice.actions;

export const productReducer = productSlice.reducer;
