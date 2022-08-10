import React, { FormEvent, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import styles from './LoginForm.module.scss'

import { IAuthForm } from 'types/IAuthForm'
import Input from '../../common/Input'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../../redux/user/userSlice'
import { useAppDispatch } from 'redux/store'
import { auth } from '../../../firebase'
import { AuthErrorsEnum } from '../../../types/enums/AuthErrorsEnum'

const LoginForm: React.FC<IAuthForm> = ({ title }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`CREATE ` + userCredential)
        const user = userCredential.user
        dispatch(
          setUser({
            email: user.email,
            username: user.displayName,
            uid: user.uid
          })
        )
        console.log(user)
        navigate('/')
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

  return (
    <div className={styles.root}>
      <div className={styles.authContainer}>
        <h1>{title.toUpperCase()}</h1>
        <div className={styles.inputsContainer}>
          <form
            className={styles.registerForm}
            id={'my-form'}
            onSubmit={(e) => handleLogin(e, email, password)}
          >
            <label className={styles.inputBlock}>
              <p>Email</p>
              <Input
                placeholder={'email'}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className={styles.inputBlock}>
              <p>Password</p>
              <Input
                placeholder={'password'}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button form={'my-form'} className={styles.loginButton}>
              Login
            </button>
            <p className={styles.subText}>
              Do not have an account?
              <Link to={'/register'} className={styles.link}>
                {' '}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
