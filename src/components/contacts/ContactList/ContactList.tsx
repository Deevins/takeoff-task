import React from 'react'
import ContactCard from '../ContactCard'

import styles from './ContactList.module.scss'

const ContactList = () => {
  return (
    <div className={styles.listRoot}>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  )
}

export default ContactList
