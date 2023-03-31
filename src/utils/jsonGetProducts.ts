import { createAsyncThunk } from '@reduxjs/toolkit'

import products from 'assets/json/product.json'

export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
  return products
})
