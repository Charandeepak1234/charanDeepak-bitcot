export const validateContact = (contact) => {
    const errors = {};
  
    if (!contact.firstName) errors.firstName = 'First name is required';
    if (!contact.lastName) errors.lastName = 'Last name is required';
    if (!contact.phone) errors.phone = 'Phone number is required';
  
    return errors;
  };
  