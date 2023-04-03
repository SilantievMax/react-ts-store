import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

import { fetchProducts } from 'utils/jsonGetProducts'

interface ProductState {
  basket: string[]
}

const initialState: ProductState = {
  basket: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getProductInBasket: (state, action: PayloadAction<string>) =>{
        state.basket.push(action.payload)
    }
  },
  extraReducers: {}
})

export default basketSlice.reducer
export const { getProductInBasket } = basketSlice.actions