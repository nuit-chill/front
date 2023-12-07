import { configureStore } from '@reduxjs/toolkit'
import scaleReducer from './slices/scale'
import fontSizeReducer from './slices/font-size'

const store = configureStore({
  reducer: {
    scale: scaleReducer,
    fontSize: fontSizeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store