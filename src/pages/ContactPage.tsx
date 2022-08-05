import React from 'react';
import {useParams} from "react-router-dom";

const ContactPage:React.FC = () => {
  const {contactId} = useParams()
  console.log(contactId)
  return (
    <div>
      Single contact with id {contactId}
    </div>
  );
};

export default ContactPage;