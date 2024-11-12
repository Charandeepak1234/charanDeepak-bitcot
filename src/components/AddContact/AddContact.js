import React, { useState } from 'react';
import { validateContact } from '../../utils/validation';

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({ firstName: '', lastName: '', phone: '' });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContact(contact);
    if (Object.keys(validationErrors).length === 0) {
      addContact(contact);
      setContact({ firstName: '', lastName: '', phone: '' }); // Clear the form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        value={contact.firstName} 
        onChange={handleChange}
      />
      {errors.firstName && <div>{errors.firstName}</div>}

      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        value={contact.lastName} 
        onChange={handleChange}
      />
      {errors.lastName && <div>{errors.lastName}</div>}

      <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={contact.phone} 
        onChange={handleChange}
      />
      {errors.phone && <div>{errors.phone}</div>}

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
