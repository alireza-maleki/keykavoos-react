import React from "react";
import { useSelector } from "react-redux";

const Number = () => {
  const { num } = useSelector((state) => state.Plus);

  return (
    <div>
      <p>{num}</p>
    </div>
  );
};

export default Number;
