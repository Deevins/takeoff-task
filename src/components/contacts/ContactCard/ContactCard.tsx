import React from 'react'

import styles from './ContactCard.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrEdit } from 'react-icons/gr'
import { deleteDocument } from '../../../api/firebase/deleteDocument'
import { IContact } from '../../../types/IContact'

type CardProps = {
  document: IContact
  id: string
}

const ContactCard: React.FC<CardProps> = ({ document, ...args }) => {
  const { city, uid, phoneNumber, fullName } = document
  const { id } = args
  const onRemoveClick = async () => {
    await deleteDocument(id)
  }
  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardHeader}>
        <FaUserCircle className={styles.userAvatar} />
        <div className={styles.cardButtonsBlock}>
          <GrEdit className={styles.cardIcon} />
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
    </div>
  )
}

export default ContactCard
