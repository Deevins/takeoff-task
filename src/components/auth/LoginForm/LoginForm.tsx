import React from 'react'
import { Link } from 'react-router-dom'

import styles from './LoginForm.module.scss'

import Input from '../../common/Input'

import { login } from '../../../api/firebase/auth'

import { IAuthForm } from 'types/IAuthForm'

const LoginForm: React.FC<IAuthForm> = ({ title }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault()
    await login(email, password)
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
              <p>Пароль</p>
              <Input
                placeholder={'Пароль'}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button form={'my-form'} className={styles.loginButton}>
              Войти
            </button>
            <p className={styles.subText}>
              Нет аккаунта?
              <Link to={'/register'} className={styles.link}>
                {' '}
                Зарегистрироваться
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
