import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

interface SortingState {
  typeProducts: string[]
  priceProduct: number[]
}

const initialState: SortingState = {
  typeProducts: ['Все'],
  priceProduct: []
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
    }
  }
})

export default sortingSlice.reducer
export const { getTypeProduct, grtPriceProduct } = sortingSlice.actions
