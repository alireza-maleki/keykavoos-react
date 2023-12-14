import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  const user = [
    { name: "ali", age: 21 },
    { name: "yasamin", age: 20 },
  ];

  return (
    <>
      <div style={{ display: "grid" }}>
        {user.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <Link to={item.name}>{item.name}</Link>
              </div>
              <div>
                <Link to={item.age.toString()}>{item.age}</Link>
              </div>
            </div>
          );
        })}
        {/* <Link to="subsetting">SubSetting</Link>
        <Link to="price">Price</Link>
        <Link to="edit">Edit</Link>
        <Link to="submit">Submit</Link> */}
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
