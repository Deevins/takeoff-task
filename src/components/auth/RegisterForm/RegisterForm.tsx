import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './RegisterForm.module.scss'
import img from 'assets/img/empty_image.png'

import Input from '../../common/Input'
import { useAppDispatch } from 'redux/store'
import { setUser } from 'redux/user/userSlice'
import { register } from 'api/firebase/auth'
import { IAuthForm } from 'types/IAuthForm'

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

    const userCredentials = await register(email, password, username, img)
    dispatch(setUser(userCredentials))
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
              <p>Имя пользователя</p>
              <Input
                placeholder={'Имя пользователя'}
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
              <p>Пароль</p>
              <Input
                placeholder={'Пароль'}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button form={'my-form'} className={styles.registerButton}>
              Зарегистрироваться
            </button>
            <p className={styles.subText}>
              Уже есть аккаунт?
              <Link to={'/login'} className={styles.link}>
                {' '}
                Войти
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
