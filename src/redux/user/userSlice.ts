import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserInitialState } from './types'

const initialState: IUserInitialState = {
  email: null,
  uid: null,
  username: null,
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
      state.username = null
      state.uid = null
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAuthenticatedUser.pending, (state) => {
  //     state.status = FetchStatusEnum.PENDING
  //     state.error = null
  //   })
  //   builder.addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
  //     state.status = FetchStatusEnum.SUCCESS
  //     state.username = action.payload.username
  //     state.token = action.payload.token
  //   })
  //   builder.addCase(fetchAuthenticatedUser.rejected, (state, action: PayloadAction<any>) => {
  //     state.status = FetchStatusEnum.REJECTED
  //     state.error = null
  //   })
  // }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
