import React from "react";
import { useParams } from "react-router";

const Name = () => {
  const { id } = useParams();
  console.log(id);

  return <div>{id}</div>;
};

export default Name;
