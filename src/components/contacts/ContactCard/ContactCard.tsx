import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrEdit } from 'react-icons/gr'
import { TbCircleCheck } from 'react-icons/tb'

import styles from './ContactCard.module.scss'

import { IContact } from 'types/IContact'

import { deleteDocument } from 'api/firebase/deleteDocument'
import { updateDocument } from 'api/firebase/updateDocumentFields'

type CardProps = {
  document: IContact
  id: string
}

const ContactCard: React.FC<CardProps> = ({ document, ...args }) => {
  const { city, uid, phoneNumber, fullName } = document
  const { id } = args

  const [isEditable, setIsEditable] = React.useState(false)
  const [name, setName] = React.useState('')
  const [tempPhoneNumber, setPhoneTempNumber] = React.useState('')
  const [tempCity, setTempCity] = React.useState('')

  const onEditClick = async () => {
    setIsEditable(!isEditable)
    if (fullName && phoneNumber && city) {
      setName(fullName)
      setPhoneTempNumber(phoneNumber)
      setTempCity(city)
    }
  }
  const onSubmitClick = async () => {
    await updateDocument(id, name, tempPhoneNumber, tempCity)
    setIsEditable(!isEditable)
  }

  const onRemoveClick = async () => {
    await deleteDocument(id)
  }

  // searchValue.length > 0 &&
  // fullName
  //   ?.replace(/[^a-zа-яё]/gi, '')
  //   .toLocaleLowerCase()
  //   .includes(searchValue.toLocaleLowerCase()) ?

  return isEditable ? (
    <div className={styles.cardRoot}>
      <div className={styles.cardHeader}>
        <FaUserCircle className={styles.userAvatar} />
      </div>
      <div className={styles.cardContent}>
        <p>
          <span>ФИО: </span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          <span>Номер: </span>
          <input
            type="text"
            value={tempPhoneNumber}
            onChange={(e) => setPhoneTempNumber(e.target.value)}
          />
        </p>
        <p>
          <span>Город: </span>
          <input type="text" value={tempCity} onChange={(e) => setTempCity(e.target.value)} />
        </p>
      </div>
      <button className={styles.editButtonContainer}>
        <TbCircleCheck className={styles.editButtonIcon} onClick={onSubmitClick} />
      </button>
    </div>
  ) : (
    (<div className={styles.cardRoot}>
      <div className={styles.cardHeader}>
        <FaUserCircle className={styles.userAvatar} />
        <div className={styles.cardButtonsBlock}>
          <GrEdit className={styles.cardIcon} onClick={onEditClick} />
          <AiOutlineCloseCircle className={styles.cardIcon} onClick={onRemoveClick} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <p>
          <span>ФИО: </span>
          {fullName}
        </p>
        <p>
          <span>Номер телефона: </span>
          {phoneNumber}
        </p>
        <p>
          <span>Город: </span>
          {city}
        </p>
        <p>
          <span>ID пользователя: </span>
          {uid}
        </p>
      </div>
    </div>)

  )
}

export default ContactCard
