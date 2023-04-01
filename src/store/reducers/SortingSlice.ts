import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

interface manufacturerProduct {
  name: string
  count: number
}

interface SortingState {
  typeProducts: string[]
  priceProduct: number[]
  manufacturerProduct: manufacturerProduct[]
}

const initialState: SortingState = {
  typeProducts: ['Все'],
  priceProduct: [],
  manufacturerProduct: []
}

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    getTypeProduct(state, action: PayloadAction<IProduc[]>) {
      action.payload.forEach(e => {
        for (let i = 0; i < e?.specifications.type.length; i++) {
          if (!state.typeProducts.includes(e?.specifications.type[i])) {
            state.typeProducts.push(e?.specifications.type[i])
          }
        }
      })
    },
    grtPriceProduct(state, action: PayloadAction<IProduc[]>) {
      const arryPrice: number[] = []
      action.payload.forEach(e => arryPrice.push(e.price))
      state.priceProduct = [Math.min(...arryPrice), Math.max(...arryPrice)]
    },
    getManufacturer(state, action: PayloadAction<IProduc[]>) {
      action.payload.forEach(e => {
        if (!state.manufacturerProduct.some(a => a.name === e.specifications.manufacturer)) {
          state.manufacturerProduct.push({
            name: e.specifications.manufacturer,
            count: 0
          })
        }
      })

      if (state.manufacturerProduct.length > 1) {
        for (let i = 0; i < state.manufacturerProduct.length; i++) {
          for (let j = 0; j < action.payload.length; j++) {
            if (state.manufacturerProduct[i].name === action.payload[j].specifications.manufacturer) {
              const count = state.manufacturerProduct[i].count
              state.manufacturerProduct[i].count = count + 1
            }
          }
        }
      }
    }
  }
})

export default sortingSlice.reducer
export const { getTypeProduct, grtPriceProduct, getManufacturer } = sortingSlice.actions
