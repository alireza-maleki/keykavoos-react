import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Number from "./Redux-Practise/Number";
import Plus from "./Redux-Practise/Plus";
import { getData } from "./Redux/action";
import { changeData } from "./Redux/action";
import { textChange } from "./Redux/action";

const App3 = () => {
  // const [num, setNum] = useState(0)
  // num ---> useSelector
  // setNum ---> useDispatch

  // const [edit, setEdit] = useState(false);
  // const [value, setValue] = useState("");

  // const dispatch = useDispatch();
  // const { post } = useSelector((state) => state.Post);

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.Post);

  useEffect(() => {
    if (!post.length) {
      dispatch(getData());
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <div className="spinner-border text-secondary" role="status"></div>
          <div className="spinner-border text-success" role="status"></div>
          <div className="spinner-border text-danger" role="status"></div>
          <div className="spinner-border text-warning" role="status"></div>
          <div className="spinner-border text-info" role="status"></div>
          <div className="spinner-border text-dark" role="status"></div>
        </div>
      )}
      {post.map((item, index) => {
        return (
          <div className="text-center" key={index}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            {edit === item.id ? (
              <>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ width: "60%" }}
                />{" "}
                <button
                  onClick={() => {
                    setEdit(false);
                    dispatch(textChange(index, value));
                  }}
                  className="btn btn-primary"
                >
                  Submit
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
          </div>
        );
      })}
    </>

    // <>
    //   <div classNameName="text-center">
    //     {post.map((item, index) => {
    //       return (
    //         <div key={item.id}>
    //           <p>{item.id}</p>
    //           <p>{item.title}</p>
    //           {edit === item.id ? (
    //             <>
    //               <input
    //                 value={value}
    //                 onChange={(e) => setValue(e.target.value)}
    //                 style={{ width: "60%" }}
    //               ></input>
    //               <button
    //                 onClick={() => {
    //                   setEdit(false);
    //                   dispatch(changeData(index, value));
    //                 }}
    //                 classNameName="btn btn-primary mx-5"
    //               >
    //                 Submit
    //               </button>
    //             </>
    //           ) : (
    //             <p
    //               onClick={() => {
    //                 setEdit(item.id);
    //                 setValue(item.body);
    //               }}
    //             >
    //               {item.body}
    //             </p>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  );
};

export default App3;
