import React, { useState, useEffect } from 'react';
import ContactsView from './components/ContactsView/ContactsView';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import ViewContact from './components/ViewContact/ViewContact';
import SearchContact from './components/SearchContact/SearchContact';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch initial contacts from the provided JSON feed
    const fetchContacts = async () => {
      const response = await fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json');
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const searchContacts = () => {
    return contacts.filter(contact => 
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <SearchContact searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactsView 
        contacts={searchContacts()} 
        onDelete={deleteContact} 
        onEdit={setSelectedContact} 
        onView={setSelectedContact} 
      />
      {selectedContact && (
        <ViewContact 
          contact={selectedContact} 
          onClose={() => setSelectedContact(null)} 
        />
      )}
      <AddContact addContact={addContact} />
      {selectedContact && (
        <EditContact 
          contact={selectedContact} 
          onEdit={editContact} 
          onClose={() => setSelectedContact(null)} 
        />
      )}
    </div>
  );
};

export default App;
