import React from 'react'

import styles from './ContactCard.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrEdit } from 'react-icons/gr'

const ContactCard: React.FC = () => {
  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardHeader}>
        <FaUserCircle className={styles.userAvatar} />
        <div className={styles.cardButtonsBlock}>
          <GrEdit className={styles.cardIcon} />
          <AiOutlineCloseCircle className={styles.cardIcon} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <p>
          <span>ФИО: </span>Irem iremso Isremasdasdasdas
        </p>
        <p>
          <span>ID пользователя: </span>koprthu345jerkdfweio45u
        </p>
        <p>
          <span>Номер телефона: </span>8-800-555-35-35
        </p>
        <p>
          <span>Город: </span>Moscow city17
        </p>
      </div>
    </div>
  )
}

export default ContactCard
