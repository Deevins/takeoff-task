import firebase from 'firebase/compat'

import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot
import { IContact } from '../types/IContact'

const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T
})

const dataPoint = <T>(collectionPath: string) =>
  firebase.firestore().collection(collectionPath).withConverter(converter<T>())

const typedFirestore = {
  contacts: dataPoint<IContact>('contacts')
}

export { typedFirestore }
