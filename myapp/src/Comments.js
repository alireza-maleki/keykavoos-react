import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { userCommentData } from "./Redux/action";
import { useNavigate, Link } from "react-router";

const Comments = () => {
  const { userComment } = useParams();
  const dispatch = useDispatch();
  const userPost = useSelector((state) => state.userPost);
  const comment = useSelector((state) => state.comment);
  //   console.log(comment)
  useEffect(() => {
    dispatch(userCommentData());
  }, []);

  return (
    <>
      <p
        style={{
          textAlign: "center",
          margin: "14px 100px",
          border: "1px solid #000",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          borderRadius: "5px",
          backgroundColor: "yellow",
        }}
      >
        {userPost[userComment - 1].id}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          margin: "18px 20px",
        }}
      >
        {comment
          .filter((item) => {
            return item.id == userComment;
          })
          .map((item) => {
            return (
              <div
                style={{
                  border: "1px solid #000",
                  margin: "16px 18px",
                  textAlign: "center",
                  boxShadow: "0 0 8px 1px red",
                  borderRadius: "5px",
                }}
                key={item.id}
              >
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Comments;
