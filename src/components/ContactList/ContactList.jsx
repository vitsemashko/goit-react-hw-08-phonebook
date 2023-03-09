import ContactListItem from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/selectors';
import css from './ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filterValue = useSelector(getFilter);
  const visibleContacts = getVisibeContacts(contacts, filterValue);

  function getVisibeContacts(contacts, filterValue) {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  if (!contacts?.length) {
    return <p className={css.noContactsText}>You can add contacts</p>;
  }

  if (!visibleContacts?.length) {
    return <p>Not found </p>;
  }

  const elements = visibleContacts.map(contact => {
    return (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
      />
    );
  });
  return (
    <>
      {isLoading ? <Loader /> : <ul className={css.ContactList}>{elements}</ul>}
    </>
  );
};

export default ContactList;
