import React from 'react';

const ViewContact = ({ contact, onClose }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.firstName} {contact.lastName}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ViewContact;
