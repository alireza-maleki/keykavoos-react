import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "./Redux2/action";
import Loader from "./Loader";
import { useNavigate } from "react-router";

const App9 = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(postAction());
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
            margin: "50px auto",
            textAlign: "center",
          }}
        >
          {post
            .filter((item) => {
              return item.userId == id;
            })
            .map((item, index) => (
              <div
                style={{
                  border: "2px solid red",
                  margin: "12px 14px",
                  borderRadius: "10px ",
                  boxShadow: "4px 4px 2px 1px",
                }}
                key={index}
              >
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <button
                  onClick={() => navigate(`${item.id.toString()}`)}
                  style={{
                    margin: "8px 0",
                    border: "1px solid blue",
                    color: "blue",
                    borderRadius: "10px",
                  }}
                >
                  Comment
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default App9;
