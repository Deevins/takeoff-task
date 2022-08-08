import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {}
})

export const {} = filterSlice.actions

export default filterSlice.reducer
