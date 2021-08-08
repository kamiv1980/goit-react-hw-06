/** @format */

import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Section, ContactForm, ContactList, Filter, EditForm } from './components';
import { selContacts, selModal } from './services/contacts/selectors';

function App() {
  const contacts = useSelector(selContacts);
  const modal = useSelector(selModal);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
        {modal && <EditForm />}
      </Section>
    </>
  );
}

export default App;
