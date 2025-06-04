import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 100 },
    { id: 3, name: 'Product C', price: 150 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
