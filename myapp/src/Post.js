import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { userPostData } from "./Redux/action";
import { useNavigate, Link } from "react-router";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userPost = useSelector((state) => state.userPost);
  const { postId } = useParams();
  console.log(postId);
  console.log(userPost);
  useEffect(() => {
    dispatch(userPostData());
  }, []);

  return (
    <>
      <p
        style={{
          textAlign: "center",
          margin: "14px auto",
          border: "1px solid #000",
          width: "160px",
          height: "50px",
          lineHeight: "50px",
          borderRadius: "5px",
          backgroundColor: "yellow",
        }}
      >
        {user[postId - 1].name}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          margin: "18px 20px",
        }}
      >
        {userPost
          .filter((item) => {
            return item.userId == postId;
          })
          .map((item) => {
            return (
              <div
                style={{
                  border: "1px solid #000",
                  margin: "16px 18px",
                  textAlign: "center",
                  boxShadow: "0 0 8px 1px blue",
                  borderRadius: "5px",
                }}
                key={item.id}
              >
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <button
                  onClick={() => navigate(`${item.id.toString()}`)}
                  style={{
                    margin: "6px 0",
                    border: "1px solid blue",
                    borderRadius: "5px",
                    color: "blue",
                  }}
                >
                  Comment
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Post;
