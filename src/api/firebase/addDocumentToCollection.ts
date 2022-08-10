import { IContact } from '../../types/IContact'
import { firestore, collection, addDoc, serverTimestamp } from '../../firebase'
import { nanoid } from 'nanoid'

export const addDocumentToCollection = async (contact: IContact, user: { uid: string }) => {
  const { phoneNumber, city, fullName } = contact
  try {
    await addDoc(collection(firestore, 'contacts'), {
      fullName: fullName,
      uid: nanoid(),
      phoneNumber: phoneNumber,
      city: city,
      createdAt: serverTimestamp(),
      createdBy: user?.uid
    })
  } catch (error) {
    alert(`Error occurred: ${error}`)
    console.error('Error adding document: ', error)
  }
}
