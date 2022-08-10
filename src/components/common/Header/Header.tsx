import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

import styles from './Header.module.scss'

import img from '../../../assets/img/empty_image.png'

import { useAppDispatch } from 'redux/store'
import { logout } from 'redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../Loader'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/user/selectors'

const Header: React.FC = () => {
  //TODO: button to sign out(right corner), to the left of this button user Icon, and  search bar(filter).
  const [user] = useAuthState(auth)
  const { username } = useSelector(selectUser)
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    dispatch(logout())
    await auth.signOut()
    navigate('/login')
  }

  const searchContacts = async () => {}
  return user ? (
    <div className={styles.root}>
      <div className={styles.userContainer}>
        <p>
          Добро пожаловать,{' '}
          <span>
            {user.displayName} <FaUserCircle className={styles.userImage} />
          </span>
        </p>
      </div>

      <div className={styles.searchBlock}>
        <input
          className={styles.searchBlock_input}
          placeholder={'Поиск по контактам...'}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.headerButton} onClick={searchContacts}>
          Найти
        </button>
      </div>
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
