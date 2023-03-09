import React from 'react';
import { Link } from 'react-router-dom';
import css from '../components/Welcome/Welcome.module.css';

const NotFoundPage = () => {
  return (
    <main className={css.welcomeWrapper}>
      <p style={{ paddingTop: 40 }}>Page not found</p>
      <Link to="/">Back to home</Link>
    </main>
  );
};

export default NotFoundPage;
