import { createSlice } from '@reduxjs/toolkit'

export const fontSizeSlice = createSlice({
  name: 'font-size',
  initialState: {
    value: 18
  },
  reducers: {
    increase: state => {
      state.value ++
    },
    decrease: state => {
      state.value --
    },
  }
})

// Action creators are generated for each case reducer function
export const { increase, decrease } = fontSizeSlice.actions

export default fontSizeSlice.reducer