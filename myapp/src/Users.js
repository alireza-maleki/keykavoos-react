import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userData } from "./Redux/action";
import { useNavigate } from "react-router";

const Users = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    dispatch(userData());
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", margin: "18px 20px"}}>
      {user.map((item) => {
        return (
          <div key={item.id} style={{border: "1px solid #000", margin: "16px 18px", textAlign: "center", boxShadow:"0 0 8px 1px #000", borderRadius: "5px"}}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <button onClick={() => navigate(`${item.id.toString()}`)} style={{margin: "6px 0", border: "1px solid blue", borderRadius: "5px", color: "blue"}}>Post</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
