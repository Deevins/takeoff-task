import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './RegisterForm.module.scss'
import img from '../../../assets/img/empty_image.png'

import { IAuthForm } from '../../../types/IAuthForm'
import Input from '../../common/Input'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAppDispatch } from '../../../redux/store'
import { auth } from '../../../firebase'
import { setUser } from '../../../redux/user/userSlice'

const RegisterForm: React.FC<IAuthForm> = ({ title }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
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

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Update the newly created user with a display name
        updateProfile(userAuth.user, {
          displayName: username,
          photoURL: img
        })
        // Dispatch the user information for persistence in the redux state
        dispatch(
          setUser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            username: username,
            photoUrl: img
          })
        )
        console.log('User created!')
        navigate('/')
      })
      .catch((err) => {
        alert(err)
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
