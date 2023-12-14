import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{display: "flex", FlexDirection: "column", justifyContent: "space-around", borderBottom: "1px solid #ccc", padding: "14px 6px", boxShadow: "1px 1px 1px 1px #ccc", backgroundColor: "#fff"}}>
        <Link to="/">Home</Link>
        <Link to="user">User</Link>
        <Link to="profile">Profile</Link>
    </div>
  )
}

export default Header