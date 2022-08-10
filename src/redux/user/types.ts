export interface IUserInitialState {
  email?: string | null
  uid?: string | null
  username: string | null
  photoUrl?: string | null
}

export interface IAuthenticatedUser {
  username: string
  photoUrl: string
}
