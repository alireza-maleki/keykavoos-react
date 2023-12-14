import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Setting = () => {
  return (
    <div>
      <Link to="subsetting">Subsetting</Link>
      <Outlet />
    </div>
  )
}

export default Setting