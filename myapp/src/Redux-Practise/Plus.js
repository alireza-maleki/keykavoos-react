import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusAction } from "../Redux/action";

const Plus = () => {
  const dispatch = useDispatch();
  const { num } = useSelector((state) => state.Plus);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(plusAction(+10));
        }}
      >
        Plus10
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch(plusAction(+5));
        }}
      >
        Plus5
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => {
          dispatch(plusAction(-10));
        }}
      >
        Mines10
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          dispatch(plusAction(-5));
        }}
      >
        Mines5
      </button>
    </div>
  );
};

export default Plus;
