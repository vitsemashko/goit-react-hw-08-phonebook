import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { default: AppBar } = require('components/AppBar/AppBar');

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
