import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ContactList from '../components/contacts/ContactList/ContactList'

const ContactListPage: React.FC = () => {
  return (
    <MainLayout>
      <main>
        <ContactList />
      </main>
    </MainLayout>
  )
}

export default ContactListPage
