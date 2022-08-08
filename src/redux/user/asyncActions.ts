import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuthenticatedUser = createAsyncThunk(
  'user/fetchUserStatus',
  async (_, { rejectWithValue, dispatch }) => {
    // const [user, loading, error] = useAuthState(auth)
    // if (user) {
    //   dispatch(
    //     setUser({
    //       username: user.displayName,
    //       email: user.email,
    //       token: user.refreshToken
    //     })
    //   )
    // }
  }
)
