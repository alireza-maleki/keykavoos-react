import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusAction, getDataAction, textChange } from "./Redux2/action";
import Loader from "./Loader";

const App6 = () => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  // console.log(edit);
  // console.log(value);

  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.data);

  // console.log(post);
  // console.log(error);

  useEffect(() => {
    if (!post.length) {
      console.log("inside");
      dispatch(getDataAction());
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {error && <p>{error}</p>}
          {post.map((item, index) => (
            <div key={item.id}>
              <p>{item.title}</p>
              {edit === item.id ? (
                <>
                  <input
                    onKeyPress={(e) => {
                      console.log(e.code);
                      if (e.code === "Enter") {
                        setEdit(false);
                        dispatch(textChange(index, value));
                      }
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ width: "60%", margin: "0 auto" }}
                  />
                  <button
                    onClick={() => {
                      setEdit(false);
                      dispatch(textChange(index, value));
                    }}
                  >
                    Done
                  </button>
                </>
              ) : (
                <p
                  onClick={() => {
                    setEdit(item.id);
                    setValue(item.body);
                  }}
                >
                  {item.body}
                </p>
              )}
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App6;
