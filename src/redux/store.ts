import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user/userSlice'
import filterReducer from './filter/filterSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
