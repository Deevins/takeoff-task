// global reference to delete/update/add documents to 'contacts' collection
import { collection } from 'firebase/firestore'
import { firestore } from '../../firebase'

export const contactsRef = collection(firestore, 'contacts')
