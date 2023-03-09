import css from './Welcome.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.welcomeWrapper}>
      <p>Welcome to Phonebook</p>
      {!isLoggedIn && (
        <p>
          Please,
          <span className={css.welcomeSpan}>Register</span> or
          <span className={css.welcomeSpan}>Log In</span> to get access to
          Contacts
        </p>
      )}
    </div>
  );
};

export default Welcome;
