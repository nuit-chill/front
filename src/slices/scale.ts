import { createSlice } from '@reduxjs/toolkit'

enum Scale {
  None = 0,
  Small = 1,
  Large = 2
}

export const scaleSlice = createSlice({
  name: 'scale',
  initialState: {
    value: Scale.None
  },
  reducers: {
    toLarge: state => {
      state.value = Scale.Large
    },
    toSmall: state => {
      state.value = Scale.Small
    },
  }
})

// Action creators are generated for each case reducer function
export const { toLarge, toSmall } = scaleSlice.actions

export default scaleSlice.reducer