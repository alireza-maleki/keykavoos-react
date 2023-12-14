import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  const prof = [
    { name: "ali", age: 21 },
    { name: "saba", age: 20 },
    { name: "amir", age: 25 },
  ];

  return (
    <>
      {prof.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Link to={item.name}>{item.name}</Link>
            </div>
            <div>
              <Link to={item.age.toString()}>{item.age}</Link>
            </div>
            <div><Link to="profile">Back</Link></div>
          </div>
        );
      })}
    </>
  );
};

export default Profile;
