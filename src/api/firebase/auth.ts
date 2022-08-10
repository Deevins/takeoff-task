import { auth, createUserWithEmailAndPassword, updateProfile } from '../../firebase'

export const register = async (email: string, password: string, username: string, img: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(user, {
    displayName: username,
    photoURL: img
  })
  console.log(user)
  return {
    email: user.email,
    uid: user.email,
    username: user.displayName,
    photoUrl: img
  }
}
