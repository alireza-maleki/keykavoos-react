import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Loader from "./Loader";
import { commentAction } from "./Redux2/action";
const App10 = () => {
  const { comments } = useParams();
  console.log(comments);

  const dispatch = useDispatch();
  const { comment, loading } = useSelector((state) => state.comment);

  console.log(comment);

  useEffect(() => {
    dispatch(commentAction());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {comment.map((item, index) => (
            <div key={index}>
              <p>{item.id}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App10;
