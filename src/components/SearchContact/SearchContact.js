import React from 'react';

const SearchContact = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search Contacts"
      />
    </div>
  );
};

export default SearchContact;
