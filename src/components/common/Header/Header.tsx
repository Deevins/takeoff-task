import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useAppDispatch } from 'redux/store'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import styles from './Header.module.scss'

import { logout } from 'redux/user/userSlice'

import Loader from '../Loader'
import Search from './Search'
import { auth } from '../../../firebase'

const Header: React.FC = () => {
  const [user] = useAuthState(auth)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    dispatch(logout())
    await auth.signOut()
    navigate('/login')
  }

  return user ? (
    <div className={styles.root}>
      <div className={styles.userContainer}>
        <p>
          <span className={styles.welcome}>Добро пожаловать, </span>
          <span className={styles.userName}>
            {user.displayName} <FaUserCircle className={styles.userImage} />
          </span>
        </p>
      </div>
      <Search />
      <div>
        <button onClick={handleLogout} className={styles.headerButton}>
          Выйти
        </button>
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Header
