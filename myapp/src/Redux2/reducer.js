export const myReducer = (state = { num: 0 }, action) => {
  switch (action.type) {
    case "change":
      return { num: action.payload };
    default:
      return state;
  }
};

export const myData = (
  state = { post: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "getData":
      return { ...state, post: action.payload, loading: false, error: false };
    case "isLoading":
      return { ...state, loading: true };
    case "getError":
      return { ...state, error: action.payload, loading: false };
    case "changePost":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export const myReduxReducer = (
  state = { todos: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "paginate":
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: false,
      };
    case "loadingRedux":
      return { ...state, loading: true };
    case "error":
      return { ...state, error: action.payload, loading: false };
    case "removeItems":
      return { ...state, todos: action.payload };
    case "changeColor":
      return { ...state, todos: action.payload };
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

export const userReducer = (
  state = { user: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload, loading: false, error: false };
    case "loading":
      return { ...state, loading: true, error: false };
    case "error":
      return { ...state, error: action.payload, loading: false};
    default:
      return state;
  }
};

export const postReducer = (
  state = { post: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "posts":
      return { ...state, post: action.payload, loading: false, error: false };
    case "loading":
      return { ...state, loading: true, error: false };
    case "error":
      return { ...state, error: action.payload, loading: false};
    default:
      return state;
  }
};

export const commentReducer = (
  state = { comment: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "comment":
      return { ...state, post: action.payload, loading: false, error: false };
    case "loading":
      return { ...state, loading: true, error: false };
    case "error":
      return { ...state, error: action.payload, loading: false};
    default:
      return state;
  }
};
