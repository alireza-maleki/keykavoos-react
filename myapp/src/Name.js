import React from "react";
import { useParams } from "react-router-dom";
const Name = () => {
  const { name } = useParams();
  console.log(name);
  return <div>{name}</div>;
};

export default Name;
