import React from 'react';

const ContactItem = ({ contact, onDelete, onEdit, onView }) => {
  return (
    <li>
      <span>{contact.firstName} {contact.lastName}</span>
      <button onClick={() => onView(contact)}>View</button>
      <button onClick={() => onEdit(contact)}>Edit</button>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
