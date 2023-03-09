import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const registerError = useSelector(selectError);
  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.registerForm} onSubmit={submitHandler}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Full name"
          required
          autoComplete="false"
        />
      </label>
      <label>
        Email
        <input
          type="email"
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

      <button type="submit">Sign up</button>
      {registerError && <p style={{ color: 'tomato' }}>Registration failed</p>}
    </form>
  );
};

export default RegisterForm;
