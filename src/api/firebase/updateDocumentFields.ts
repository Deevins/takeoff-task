import { doc, firestore, updateDoc } from '../../firebase'

export const updateDocument = async (
  id: string,
  name: string,
  phoneNumber: string,
  city: string
) => {
  const contactsRef = doc(firestore, 'contacts', id)

  await updateDoc(contactsRef, {
    fullName: name,
    phoneNumber,
    city
  })
}
