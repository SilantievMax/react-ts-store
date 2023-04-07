import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// import { fetchProducts } from 'utils/jsonGetProducts'
import json from 'assets/json/product.json'

import { IProduc } from './../../types/types'

interface ProductState {
  basket: string[]
  products: IProduc[]
  jsonProduct: IProduc[]
}

const initialState: ProductState = {
  basket: [],
  products: [],
  jsonProduct: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getProductInBasket: (state, action: PayloadAction<string>) => {
      state.basket.push(action.payload)
    },
    parsingProduct: state => {
      state.products = []
      state.jsonProduct = json
      state.basket.forEach(el => {
        const indexProduct = state.jsonProduct.map(o => o.barcode).indexOf(el)
        console.log(indexProduct)
        state.products.push(json[indexProduct])
      })
    }
  },
  extraReducers: {}
})

export default basketSlice.reducer
export const { getProductInBasket, parsingProduct } = basketSlice.actions
