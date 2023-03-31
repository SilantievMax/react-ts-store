import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

import { fetchProducts } from 'utils/jsonGetProducts'

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
  reducers: {},
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
