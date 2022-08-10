import React from 'react'
import ContactCard from '../ContactCard'

import styles from './ContactList.module.scss'

import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, orderBy, query, where } from '../../../firebase'
import Loader from '../../common/Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import { contactsRef } from 'api/firebase/getCollections'

const ContactList: React.FC = () => {
  const [user] = useAuthState(auth)
  const [value, loading, error] = useCollection(
    query(contactsRef, orderBy('createdAt'), where('createdBy', '==', user?.uid)),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )

  if (loading) {
    return <Loader />
  }
  if (error) {
    console.log(error)
    return (
      <h1 className={styles.alertTitle}>Error occurred while fetching contacts! Check console</h1>
    )
  }

  return (
    <div className={styles.listRoot}>
      {value && (
        <>
          {value.docs.map((doc) => (
            <ContactCard key={doc.id} document={doc.data()} id={doc.id} />
          ))}
        </>
      )}
    </div>
  )
}

export default ContactList
