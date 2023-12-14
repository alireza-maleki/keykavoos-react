import React, { useState } from "react";
import "./Todoapp.css";
import Logo from "./images/Delete.png";

const Todoapp = () => {
  // const [number, setNumber] = useState([0]);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  // const add = () => {
  //   setNumber((x) => [...x, x[x.length - 1] + 1]);
  // };

  // const del = () => {
  //   setNumber((arr) => {
  //     const help = [...arr];
  //     help.pop();
  //     return [...help];
  //   });
  // };

  const textHandler = (event) => {
    setText(event.target.value);
  };

  const deleteHandler = (text) => {
    if (!text) {
      alert("please write something !");
    } else {
      setTodo((last) => [...last, { todo: text, flag: false }]);
      setText("");
    }
  };

  const deleteTodoHandler = (index) => {
    setTodo((last) => {
      const help = [...last];
      help.splice(index, 1);
      return [...help];
    });
  };

  return (
    <div className="todoapp">
      {/* <button onClick={add}>Add</button>
      <button onClick={del}>Del</button>
      {number.map((item, index) => (
        <span key={index}
            style={{backgroundColor: item % 2 ? "red" : "blue"}}
        >{item} , </span>
      ))}
      <br /> */}
      <input value={text} onChange={textHandler} />
      <button className="reset" onClick={() => deleteHandler(text)}>
        Reset
      </button>
      {todo.map((item, index) => (
        <p key={index} style={{ backgroundColor: item.flag ? "green" : "red" }}>
          {item.todo}
          <button
            onClick={() => {
              const state = item.flag;
              setTodo((last) => {
                const help = [...last];
                help[index].flag = !state;
                return [...help];
              });
            }}
            className="todobtn"
          >
            Done
          </button>
          <img src={Logo} onClick={deleteTodoHandler} className="delete" />
        </p>
      ))}
    </div>
  );
};

export default Todoapp;
