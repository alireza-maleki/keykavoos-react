import React from "react";
import { useState, useEffect, useRef } from "react";
import "./bootstrap.css";
import { Button, Table, Pagination } from "react-bootstrap";
import {
  reduxAction,
  removeItem,
  changeColor,
  minusPage,
  plusPage,
  paginateAction,
} from "./Redux2/action";
import { useDispatch, useSelector } from "react-redux";

const App5 = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const page = useSelector((state) => state.page);
  const paginate = useSelector((state) => state.paginate);

  // console.log(todos);

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(todos.slice((page - 1) * 10, page * 10));
  }, [todos, page]);

  useEffect(() => {
    if (!newData.length && !(page == 1)) {
      dispatch(minusPage());
    }
  }, [newData]);

  useEffect(() => {
    dispatch(reduxAction());
  }, []);

  useEffect(() => {
    dispatch(paginateAction());
  }, [todos]);
  // console.log(paginate);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item, index) => (
            <tr key={index}>
              <td onClick={() => dispatch(removeItem(index))}>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td
                onClick={() =>
                  dispatch(changeColor(item.completed, page, index))
                }
                style={{ backgroundColor: item.completed ? "green" : "red" }}
              >
                {item.completed.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div
        style={{
          margin: "8px auto",
          textAilgn: "center",
          width: "100%",
          transform: "translateX(12%)",
        }}
      >
        <Pagination>
          {paginate.map((item, index) => (
            <Pagination.Item
              active={index + 1 === page}
              onClick={() => dispatch(plusPage(index))}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default App5;
