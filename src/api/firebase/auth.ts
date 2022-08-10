import { auth, createUserWithEmailAndPassword, updateProfile } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthErrorsEnum } from '../../types/enums/AuthErrorsEnum'

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

export const login = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(`Error code is ${errorCode} and  error message is ${errorMessage}`)
      if (
        errorCode === AuthErrorsEnum.WRONG_PASSWORD ||
        errorCode === AuthErrorsEnum.INVALID_EMAIL ||
        errorCode === AuthErrorsEnum.USER_NOT_FOUND
      ) {
        alert(
          'Адрес электронной почты и/или пароль, которые вы указали, неверны. Попробуйте ещё раз!'
        )
      }
    })
}
