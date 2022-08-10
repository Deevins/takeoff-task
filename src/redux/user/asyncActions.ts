import { createAsyncThunk } from '@reduxjs/toolkit'
import { setUser } from './userSlice'
import { IAuthenticatedUser } from './types'

export const fetchAuthenticatedUser = createAsyncThunk(
  'user/fetchUserStatus',
  async (params: IAuthenticatedUser, { rejectWithValue, dispatch }) => {
    const { username, photoUrl } = params
    try {
      dispatch(setUser({ username, photoUrl }))
    } catch (err) {
      return rejectWithValue(err)
    }
    console.log('fetch')
  }
)
