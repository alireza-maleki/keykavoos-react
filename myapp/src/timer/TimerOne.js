import React, { useEffect, useState } from "react";
import "./Timer.css";
import "./Button.css";

const TimerOne = ({ timer1, setTimer1, setTimer2, setTimer3 }) => {
  const [num1, setNum1] = useState(0);

  useEffect(() => {
    if (timer1) {
      var clearTime = setInterval(() => {
        setNum1((last) => last + 1);
      }, 500);
    }
    return () => clearInterval(clearTime);
  }, [timer1]);

  const nextHandler1 = () => {
    if (timer1) {
      setTimer1(false);
      setTimer2(true);
    }
  };

  const prevHandler1 = () => {
    if (timer1) {
      setTimer1(false);
      setTimer3(true);
    }
  };

  return (
    <div>
      <p className="textstyle">{num1}</p>
      <button className="btnStyle" onClick={prevHandler1}>
        Prev
      </button>
      <button className="btnStyle" onClick={nextHandler1}>
        Next
      </button>
    </div>
  );
};

export default TimerOne;
