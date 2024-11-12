import React from 'react';
import ContactItem from './ContactItem';

const ContactsView = ({ contacts, onDelete, onEdit, onView }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <ContactItem 
            key={contact.id} 
            contact={contact} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            onView={onView}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsView;
