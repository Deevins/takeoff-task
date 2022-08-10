import { serverTimestamp } from '../firebase'

export interface IContact {
  city?: string
  createdAt?: typeof serverTimestamp
  createdBy?: string
  fullName?: string
  phoneNumber?: string
  uid?: string
}
