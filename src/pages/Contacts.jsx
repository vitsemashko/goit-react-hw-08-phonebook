import React from 'react';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <div>
        <section>
          <h2>Add new contact</h2>
          <ContactForm />
        </section>
        <section>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </main>
  );
};

export default Contacts;
