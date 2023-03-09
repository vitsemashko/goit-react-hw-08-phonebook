import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts, getIsLoading } from 'redux/selectors';
import { TailSpin } from 'react-loader-spinner';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const isLoaded = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const notify = () => {
    toast.info('Contact added', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newContact = { name: form.name.value, number: form.number.value };
    let filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase() === form.name.value.toLowerCase();
    });
    if (filteredContacts.length === 0) {
      dispatch(addContact(newContact));
      form.reset();
      setName('');
      setNumber('');
    } else {
      alert(`${form.name.value} is already in contact list`);
    }
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label>
        Name
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="false"
        />
      </label>

      <label>
        Number
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="false"
        />
      </label>

      <button
        type="submit"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={notify}
        disabled={!Boolean(name) || !Boolean(number)}
      >
        {isLoaded ? (
          <TailSpin
            height="20"
            width="20"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          'Add contact'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
