import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

import products from 'assets/json/product.json'

export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
  return products
})

interface ProductState {
  products: IProduc[]
  isLoading: boolean
  error: string
}

const initialState: ProductState = {
  products: [],
  isLoading: true,
  error: ''
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // productsFetching(state) {
    //   state.isLoading = true
    // },
    // productsFetchingSuccess(state, action: PayloadAction<IProduc[]>) {
    //   state.isLoading = false
    //   state.error = ''
    //   state.products = action.payload
    // },
    // productsFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  },
  extraReducers: {
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduc[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.products = action.payload
    },
    [fetchProducts.pending.type]: state => {
      state.products = []
      state.isLoading = true
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default productSlice.reducer
// export const { productsFetching } = productSlice.actions
