import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./Redux2/action";
import Loader from "./Loader";
import { useNavigate } from "react-router";

const App8 = () => {

  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userAction());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            margin: "30px auto",
            textAlign: "center",
          }}
        >
          {user.map((item, index) => (
            <div
              style={{
                border: "1px solid #111",
                margin: "12px 14px",
                borderRadius: "10px",
                boxShadow: "4px 4px 4px 2px",
              }}
              key={index}
            >
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.username}</p>
              <button
                onClick={() => navigate(`${item.id.toString()}`)}
                style={{
                  margin: "6px 0",
                  border: "1px solid blue",
                  borderRadius: "5px",
                  color: "blue",
                }}
              >
                Post
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App8;
