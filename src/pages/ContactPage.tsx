import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ContactCard from '../components/contacts/ContactCard'

const ContactPage: React.FC = () => {
  const { contactId } = useParams()

  return <MainLayout>ContactCard with {contactId}</MainLayout>
}

export default ContactPage
