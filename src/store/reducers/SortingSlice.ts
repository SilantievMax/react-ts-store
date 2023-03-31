import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduc } from 'types/types'

interface SortingState {
  typeProducts: string[]
}

const initialState: SortingState = {
  typeProducts: ["Все"]
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
    }
  }
})

export default sortingSlice.reducer
export const { getTypeProduct } = sortingSlice.actions
