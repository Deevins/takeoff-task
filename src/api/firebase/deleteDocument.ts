import 'firebase/firestore'
import { doc, firestore } from '../../firebase'
import { deleteDoc } from 'firebase/firestore'

export const deleteDocument = async (id: string) => {
  await deleteDoc(doc(firestore, 'contacts', id))
}
