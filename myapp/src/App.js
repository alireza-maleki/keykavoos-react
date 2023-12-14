import React, { useState, useEffect } from "react";
import TimerOne from "./timer/TimerOne";
import TimerTwo from "./timer/TimerTwo";
import TimerThree from "./timer/TimerThree";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  todoRedux,
  plusPage,
  minusPage,
  paginateAction,
  newDataAction,
  searchAction,
  removeTodo,
  changeColor,
} from "./Redux/action";

const App = () => {
  const dispatch = useDispatch();
  const { apiData } = useSelector((state) => state.todo);
  const page = useSelector((state) => state.page);
  const paginate = useSelector((state) => state.paginate);
  const newData = useSelector((state) => state.newData);
  const search = useSelector((state) => state.search);

  // const [apiData, setApiData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [paginate, setPaginate] = useState([]);
  // const [newData, setNewData] = useState([]);
  // const [search, setSearch] = useState("");

  // const apidataHandler = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     setApiData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.error);
  //   }
  // };

  useEffect(() => {
    dispatch(newDataAction());
  }, [apiData, page]);

  useEffect(() => {
    if (!newData.lenght && !(page == 1)) {
      dispatch(minusPage());
    }
  }, [newData]);

  useEffect(() => {
    dispatch(todoRedux());
  }, []);

  useEffect(() => {
    dispatch(paginateAction());
  }, [apiData]);

  return (
    <>
      <input onChange={(e) => dispatch(searchAction(e.target.value))} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {newData
            .filter((item, index) => {
              return item.title.includes(search);
            })
            .map((item, index) => (
              <tr key={index}>
                <td
                  // onClick={() => {
                  //   setApiData((last) => {
                  //     const help = [...last];
                  //     help.splice(index, 1);
                  //     return [...help];
                  //   });
                  // }}
                  onClick={() => {
                    dispatch(removeTodo(index));
                  }}
                >
                  {index}
                </td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td
                  // onClick={() => {
                    //   setApiData((last) => {
                  //     const help = [...last];
                  //     help[(page - 1) * 10 + index].completed = !state;
                  //     return [...help];
                  //   });
                  // }}
                  onClick={() => {
                    const state = item.completed;
                    dispatch(changeColor(state, index))
                  }}
                  style={{ backgroundColor: item.completed ? "green" : "red" }}
                >
                  {item.completed.toString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination className="mx-5">
        {paginate.map((item, index) => (
          <Pagination.Item
            active={index + 1 === page}
            key={index}
            onClick={() => dispatch(plusPage(index))}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
    // <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '50px'}}>
    //   <TimerOne setTimer3={setTimer3} timer1={timer1} setTimer1={setTimer1} setTimer2={setTimer2}/>
    //   <TimerTwo timer2={timer2} setTimer1={setTimer1} setTimer2={setTimer2} setTimer3={setTimer3} />
    //   <TimerThree setTimer1={setTimer1} timer3={timer3} setTimer3={setTimer3} setTimer2={setTimer2}/>
    //   <button className="btnStyle" onClick={stopHandler}>Stop</button>
    // </div>
  );
};

export default App;
