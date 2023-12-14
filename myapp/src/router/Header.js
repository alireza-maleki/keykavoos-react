import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("user")}>User</p>
        <p onClick={() => navigate("profile")}>Profile</p>
    </div>
  )
}

export default Header