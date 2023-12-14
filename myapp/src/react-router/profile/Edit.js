import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Edit = () => {
  return (
    <>
        <p>Edit rewiew</p>
        <Link to="continue">Continue</Link>
        <Outlet />
    </>
  )
}

export default Edit