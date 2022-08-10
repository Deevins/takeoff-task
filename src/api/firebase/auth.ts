import { auth, createUserWithEmailAndPassword, updateProfile } from '../../firebase'
import firebase from 'firebase/compat/app'
import img from '../../assets/img/empty_image.png'
import { setUser } from '../../redux/user/userSlice'

export const register = async (
  auth: any,
  email: string,
  password: string,
  username: string,
  img: string
) => {
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

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userAuth) => {
//     // Update the newly created user with a display name
//     updateProfile(userAuth.user, {
//       displayName: username,
//       photoURL: img
//     })
//   })
//   .catch((err: any) => {
//     alert(err)
//   })
// }
// export {}
