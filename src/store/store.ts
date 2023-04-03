import { combineReducers, configureStore } from '@reduxjs/toolkit'

import basketReduxer from 'store/reducers/BasketSlice'
import productReduxer from 'store/reducers/ProductSlice'
import sortingReduxer from 'store/reducers/SortingSlice'

const rootReducer = combineReducers({
  productReduxer,
  sortingReduxer,
  basketReduxer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
