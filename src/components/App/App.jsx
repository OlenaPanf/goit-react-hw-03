import initialContacts from '../../contacts.json'
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}


