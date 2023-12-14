import React from "react";
import Newcomponent from "./Newcomponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const Mycomponent = (props) => {
  return (
      <>
        {props.children}
      </>
  );
};

export default Mycomponent;
