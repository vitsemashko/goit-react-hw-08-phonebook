import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useAuth().user;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenuWrapper}>
      <span>{email}</span>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
