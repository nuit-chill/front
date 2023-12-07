import { configureStore } from '@reduxjs/toolkit'
import scaleReducer from './slices/scale'

const store = configureStore({
  reducer: {
    scale: scaleReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store