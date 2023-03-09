import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const loginError = useSelector(selectError);
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.LoginForm} onSubmit={submitHandler}>
      <label>
        Email
        <input
          type="text"
          name="email"
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          title="Email in format example@gmail.com "
          required
          autoComplete="true"
        />
      </label>
      <label>
        Password
        <input type="password" name="password" title="Password" required />
      </label>

      <button>Log In</button>
      {loginError && <p style={{ color: 'tomato' }}>Login failed</p>}
    </form>
  );
};

export default LoginForm;
