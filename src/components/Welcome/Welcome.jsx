import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import css from './Welcome.module.css';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.welcomeWrapper}>
      <p>Welcome to Phonebook</p>
      {!isLoggedIn && (
        <p>
          Please,
          <Link to="/register" className={css.welcomeSpan}>
            Register
          </Link>{' '}
          or
          <Link to="/login" className={css.welcomeSpan}>
            Log In
          </Link>{' '}
          to get access to Contacts
        </p>
      )}
    </div>
  );
};

export default Welcome;
