import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import styles from './Sidebar.module.scss'

import { auth } from '../../../firebase'

import Modal from '../Modal'

import { addDocumentToCollection } from 'api/firebase/addDocumentToCollection'

const Sidebar = () => {
  const [user] = useAuthState(auth)
  const [isActive, setIsActive] = React.useState(false)

  const [name, setName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [city, setCity] = React.useState('')

  const onClickCreate = async () => {
    if (user) await addDocumentToCollection({ city, fullName: name, phoneNumber }, user)
    setIsActive(false)
    setCity('')
    setPhoneNumber('')
    setName('')
  }

  return (
    <div className={styles.sidebarRoot}>
      <div className={styles.sidebarContent}>
        <button className={styles.sidebarElem} onClick={() => setIsActive(true)}>
          Добавить контакт
        </button>
      </div>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <h1>Добавить контакт</h1>
        <span>
          <p>ФИО</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </span>
        <span>
          <p>Номер телефона</p>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </span>
        <span>
          <p>Город</p>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </span>
        <button onClick={() => onClickCreate()}>Создать</button>
      </Modal>
    </div>
  )
}

export default Sidebar
