import axios from "axios";

export const plusAction = (x) => (dispatch, getState) => {
  dispatch({ type: "change", payload: x + getState().reducer.num });
};

export const getDataAction = () => async (dispatch, getState) => {
  dispatch({ type: "isLoading" });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    localStorage.setItem("post", JSON.stringify(data));
    // console.log(data);
    dispatch({ type: "getData", payload: [...data] });
  } catch (error) {
    // console.log(error.message);
    dispatch({ type: "getError", payload: error.message });
  }
  // console.log(getState().data.post[0]);
};

export const textChange = (index, value) => (dispatch, getState) => {
  // console.log(getState().data.post);
  const text = [...getState().data.post];
  text[index].body = value;
  localStorage.setItem("post", JSON.stringify(text));
  dispatch({ type: "changePost", payload: [...text] });
};

export const reduxAction = () => async (dispatch, getState) => {
  dispatch({ type: "loadingRedux", payload: true });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(data);
    dispatch({ type: "paginate", payload: [...data] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "error", payload: error.message });
  }
};

export const removeItem = (index) => (dispatch, getState) => {
  // console.log(getState().todos.todos);
  const last = [...getState().todos.todos];
  last.splice(index, 1);
  dispatch({ type: "removeItems", payload: [...last] });
};

export const changeColor = (item, page, index) => (dispatch, getState) => {
  const state = item;
  const last = [...getState().todos.todos];
  last[(page - 1) * 10 + index].completed = !state;
  dispatch({ type: "changeColor", payload: [...last] });
};

export const minusPage = () => (dispatch, getState) => {
  const last = getState().page;
  dispatch({ type: "minusPage", payload: last - 1 });
};

export const plusPage = (index) => (dispatch, getState) => {
  dispatch({ type: "minusPage", payload: index + 1 });
};

export const paginateAction = () => (dispatch, getState) => {
  const last = getState().todos.todos;
  const x = last.filter((item, index) => !(index % 10));
  dispatch({ type: "paginate", payload: x });
};

export const userAction = () => async (dispatch, getState) => {
  dispatch({ type: "loading" });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    dispatch({ type: "user", payload: [...data] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "error", payload: error.message });
  }
};

export const postAction = () => async (dispatch, getState) => {
  dispatch({ type: "loading" });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    dispatch({ type: "posts", payload: [...data] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "error", payload: error.message });
  }
};

export const commentAction = () => async (dispatch, getState) => {
  dispatch({ type: "loading" });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(data);
    dispatch({ type: "comment", payload: [...data] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "error", payload: error.message });
  }
};
