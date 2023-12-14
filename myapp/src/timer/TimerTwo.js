import React, { useState, useEffect } from "react";
import "./Timer.css";
import "./Button.css";

const TimerTwo = ({ timer2, setTimer2, setTimer3, setTimer1 }) => {
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    if (timer2) {
      var clearTime = setInterval(() => {
        setNum2((last) => last + 1);
      }, 500);
    }
    return () => clearInterval(clearTime);
  }, [timer2]);

  const nextHandler2 = () => {
    if (timer2) {
      setTimer2(false);
      setTimer3(true);
    }
  };

  const pervHandler2 = () => {
    if (timer2) {
      setTimer2(false);
      setTimer1(true);
    }
  };

  return (
    <div>
      <p className="textstyle">{num2}</p>
      <button className="btnStyle" onClick={pervHandler2}>
        Prev
      </button>
      <button className="btnStyle" onClick={nextHandler2}>
        Next
      </button>
    </div>
  );
};

export default TimerTwo;
