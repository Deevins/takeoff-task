import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserInitialState } from './types'
import { fetchAuthenticatedUser } from './asyncActions'
import { FetchStatusEnum } from '../../types/enums/FetchStatusEnum'

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
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAuthenticatedUser.pending, (state) => {})
  //   builder.addCase(fetchAuthenticatedUser.fulfilled, (state, action: PayloadAction<any>) => {
  //     state.username = action.payload.username
  //   })
  //   builder.addCase(fetchAuthenticatedUser.rejected, (state, action: PayloadAction<any>) => {})
  // }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
