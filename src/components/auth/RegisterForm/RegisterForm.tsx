import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './RegisterForm.module.scss'
import img from '../../../assets/img/empty_image.png'

import { IAuthForm } from '../../../types/IAuthForm'
import Input from '../../common/Input'
import { useAppDispatch } from '../../../redux/store'
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../../firebase'
import { fetchAuthenticatedUser } from '../../../redux/user/asyncActions'
import { setUser } from '../../../redux/user/userSlice'
import { register } from '../../../api/firebase/auth'

const RegisterForm: React.FC<IAuthForm> = ({ title }) => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleRegister = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    username: string
  ) => {
    event.preventDefault()

    const userCredentials = await register(auth, email, password, username, img)
    dispatch(setUser(userCredentials))

    // IT WORKS!
    // const { user } = await createUserWithEmailAndPassword(auth, email, password)
    // await updateProfile(user, {
    //   displayName: username,
    //   photoURL: img
    // })
    // console.log(user)
    // dispatch(
    //   setUser({
    //     email: user.email,
    //     uid: user.email,
    //     username: user.displayName,
    //     photoUrl: img
    //   })
    // )
  }

  return (
    <div className={styles.root}>
      <div className={styles.authContainer}>
        <h1>{title.toUpperCase()}</h1>
        <div className={styles.inputsContainer}>
          <form
            className={styles.registerForm}
            id={'my-form'}
            onSubmit={(e) => handleRegister(e, email, password, username)}
          >
            <label className={styles.inputBlock}>
              <p>Username</p>
              <Input
                placeholder={'username'}
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
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
            <button form={'my-form'} className={styles.registerButton}>
              Register
            </button>
            <p className={styles.subText}>
              Already have an account?
              <Link to={'/login'} className={styles.link}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
