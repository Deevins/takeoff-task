import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { nanoid } from 'nanoid'

import styles from './Header.module.scss'

import img from '../../../assets/img/empty_image.png'

import { useAppDispatch } from 'redux/store'
import { logout, setUser } from 'redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { auth, firestore, getDoc, collection, addDoc, serverTimestamp } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../Loader'

const Header: React.FC = () => {
  //TODO: button to sign out(right corner), to the left of this button user Icon, and  search bar(filter).
  const [user] = useAuthState(auth)
  const [searchValue, setSearchValue] = useState('')
  // const [contacts, loading] = useCollectionData()
  // console.log(contacts)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    dispatch(logout())
    await auth.signOut()
    navigate('/login')
  }

  const searchContacts = async () => {
    console.log(searchValue)
    try {
      const docRef = await addDoc(collection(firestore, 'contacts'), {
        fullName: 'Фио Фиовил Фиолович22',
        uid: nanoid(),
        phoneNumber: '8-800-555-35-35',
        city: 'Moscow city 17',
        createdAt: serverTimestamp(),
        createdBy: user?.uid
      })

      console.log('Document written with ID: ', docRef)
    } catch (error) {
      alert(`Error occurred: ${error}`)
      console.error('Error adding document: ', error)
    }
  }
  if (!user) {
    return <Loader />
  }

  return (
    <div className={styles.root}>
      <div className={styles.userContainer}>
        <p>
          Добро пожаловать,
          <span>
            <FaUserCircle className={styles.userImage} /> {user.displayName}
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
  )
}

export default Header
