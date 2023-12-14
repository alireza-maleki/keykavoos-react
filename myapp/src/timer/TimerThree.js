import React, { useState, useEffect } from "react";
import "./Timer.css";
import "./Button.css";

const TimerThree = ({ timer3, setTimer3, setTimer2, setTimer1 }) => {
  const [num3, setNum3] = useState(0);

  useEffect(() => {
    if (timer3) {
      var clearTime = setInterval(() => {
        setNum3((last) => last + 1);
      }, 500);
    }
    return () => clearInterval(clearTime);
  }, [timer3]);

  const prevHandler3 = () => {
    if (timer3) {
      setTimer3(false);
      setTimer2(true);
    }
  };

  const nextHandler3 = () => {
    if (timer3) {
      setTimer3(false);
      setTimer1(true);
    }
  };

  return (
    <div>
      <p className="textstyle">{num3}</p>
      <button className="btnStyle" disabled={!timer3} onClick={prevHandler3}>
        Prev
      </button>
      <button className="btnStyle" onClick={nextHandler3}>
        Next
      </button>
    </div>
  );
};

export default TimerThree;
