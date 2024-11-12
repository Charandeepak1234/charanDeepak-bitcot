import React, { useState, useEffect } from 'react';
import { validateContact } from '../../utils/validation';

const EditContact = ({ contact, onEdit, onClose }) => {
  const [editedContact, setEditedContact] = useState(contact);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContact(editedContact);
    if (Object.keys(validationErrors).length === 0) {
      onEdit(editedContact);
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        value={editedContact.firstName} 
        onChange={handleChange}
      />
      {errors.firstName && <div>{errors.firstName}</div>}

      <input 
        type="text" 
        name="lastName" 
        value={editedContact.lastName} 
        onChange={handleChange}
      />
      {errors.lastName && <div>{errors.lastName}</div>}

      <input 
        type="text" 
        name="phone" 
        value={editedContact.phone} 
        onChange={handleChange}
      />
      {errors.phone && <div>{errors.phone}</div>}

      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditContact;
