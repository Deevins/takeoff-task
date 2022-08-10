import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUserInitialState } from './types'

const initialState: IUserInitialState = {
  email: null,
  uid: null,
  username: '',
  photoUrl: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserInitialState>) {
      state.email = action.payload.email
      state.username = action.payload.username
      state.uid = action.payload.uid
    },
    logout(state) {
      state.email = null
      state.username = ''
      state.uid = null
    }
  }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
