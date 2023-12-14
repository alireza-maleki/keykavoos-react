import axios from "axios";

export const plusAction = (x) => (dispatch, getState) => {
  console.log(getState().Plus.num);
  dispatch({ type: "Change", payload: x + getState().Plus.num });
};

// export const getData = () => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     dispatch({ type: "Post" , payload: [...data]})
//     console.log(data);
//   } catch (error) {
//       console.log(error.message);
//   }
// };

// export const changeData = (index, value) => (dispatch, getState) => {
//   const text = [...getState().Post.post];
//   text[index].body = value;
//   dispatch({ type: "changeData", payload: [...text] })
// };

export const getData = () => async (dispatch, getState) => {
  dispatch({ type: "loader" });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    localStorage.setItem("post", JSON.stringify(data));
    dispatch({ type: "Post", payload: [...data] });
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const textChange = (index, value) => (dispatch, getState) => {
  // console.log(getState().Post.post);
  const text = [...getState().Post.post];
  text[index].body = value;
  localStorage.setItem("post", JSON.stringify(text));
  dispatch({ type: "changePost", payload: [...text] });
};

export const todoRedux = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: "todoRedux", payload: [...data] });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const minusPage = () => (dispatch, getState) => {
  const last = getState().page;
  // console.log(last);
  dispatch({ type: "minusPage", payload: last - 1 });
};

export const plusPage = (index) => (dispatch, getState) => {
  dispatch({ type: "plusPage", payload: index + 1 });
};

export const paginateAction = () => (dispatch, getState) => {
  const apiData = getState().todo.apiData;
  const x = apiData.filter((item, index) => !(index % 10));
  dispatch({ type: "paginate", payload: x });
};

export const newDataAction = () => (dispatch, getState) => {
  const apiData = getState().todo.apiData;
  const page = getState().page;
  const x = apiData.slice((page - 1) * 10, page * 10);
  dispatch({ type: "newData", payload: x });
};

export const searchAction = (x) => (dispatch, getState) => {
  dispatch({ type: "search", payload: x });
};

export const removeTodo = (index) => (dispatch, getState) => {
  const help = getState().todo.apiData;
  help.splice(index, 1);
  dispatch({ type: "removeTodo", payload: [...help] });
};

export const changeColor = (state, index) => (dispatch, getState) => {
  const help = getState().todo.apiData;
  const page = getState().page;
  help[(page - 1) * 10 + index].completed = !state;
  dispatch({ type: "changeColor", payload: [...help] });
};

export const userData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: "userData", payload: [...data] });
  } catch (error) {
    console.log(error.message);
  }
};

export const userPostData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "userPost", payload: [...data] });
  } catch (error) {
    dispatch({ type: "errorPost", payload: error.message });
  }
};

export const userCommentData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    dispatch({ type: "getComment", payload: [...data] })
  } catch (error) {
    console.log(error.message);
  }
};
