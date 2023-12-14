import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div>
      <Link to="setting">Setting</Link>
      <Link to="change">Change</Link>
      <Link to="password">Password</Link>
    </div>
    <Outlet />
    </>
  )
}

export default Services