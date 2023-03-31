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
  reducers: {
    sortingPrice: (state, action: PayloadAction<string>) => {
      console.log(action.payload)

      if (action.payload === '1-0') {
        state.products = state.products.sort((a, b) => b.price - a.price)
      } else if (action.payload === '0-1') {
        state.products = state.products.sort((a, b) => a.price - b.price)
      } else if (action.payload === 'a-z') {
        state.products = state.products.sort((a: any, b: any) =>
          a.title.localeCompare(b.title)
        )
      } else if (action.payload === 'z-a') {
        state.products = state.products.sort((a: any, b: any) =>
          b.title.localeCompare(a.title)
        )
      }
    }
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
export const { sortingPrice } = productSlice.actions
