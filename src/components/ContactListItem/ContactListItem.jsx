import React, { memo } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactListItem.module.css';
import { TailSpin } from 'react-loader-spinner';

const ContactListItem = memo(({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const onDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
    toast.info('Contact deleted', {
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

  return (
    <li className={css.ContactListItem} key={id}>
      <span>
        {name}: {number}
      </span>
      <button id={id} onClick={onDelete}>
        {isLoading ? (
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
          'Delete'
        )}
      </button>
    </li>
  );
});

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
