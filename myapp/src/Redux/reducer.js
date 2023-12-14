// export const postReducer = (state = { post: [], loading: false }, action) => {
//   switch (action.type) {
//     case "Post":
//       return { ...state, post: action.payload, loading: false };
//     case "loader":
//       return { ...state, loading: true };
//     case "changeData":
//       return { ...state, post: action.payload };

//     default:
//       return state;
//   }
// };

export const postReducer = (state = { post: [], loading: false }, action) => {
  switch (action.type) {
    case "Post":
      return { ...state, post: action.payload, loading: false };
    case "changePost":
      return { ...state, post: action.payload };
    case "loader":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const todoReducer = (state = { apiData: [] }, action) => {
  switch (action.type) {
    case "todoRedux":
      return { ...state, apiData: action.payload };
    case "removeTodo":
      return { ...state, apiData: action.payload };
    case "changeColor":
      return { ...state, apiData: action.payload };
    default:
      return state;
  }
};

export const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "minusPage":
      return action.payload;
    case "plusPage":
      return action.payload;
    default:
      return state;
  }
};

export const paginateReducer = (state = [], action) => {
  switch (action.type) {
    case "paginate":
      return action.payload;
    default:
      return state;
  }
};

export const newDataReducer = (state = [], action) => {
  switch (action.type) {
    case "newData":
      return action.payload;
    default:
      return state;
  }
};

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "search":
      return action.payload;
    default:
      return state;
  }
};

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case "userData":
      return action.payload;
    default:
      return state;
  }
};

export const userPostReducer = (state = [], action) => {
  switch (action.type) {
    case "userPost":
      return action.payload;
    case "errorPost":
      return action.payload;
    default:
      return state;
  }
};

export const commentReducer = (state = [], action) => {
  switch (action.type) {
    case "getComment":
      return action.payload;
    default:
      return state;
  }
}
