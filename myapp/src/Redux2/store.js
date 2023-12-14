import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  myReducer,
  myData,
  myReduxReducer,
  pageReducer,
  paginateReducer,
  userReducer,
  postReducer,
  commentReducer,
} from "./reducer";

const reducers = combineReducers({
  reducer: myReducer,
  data: myData,
  todos: myReduxReducer,
  page: pageReducer,
  paginate: paginateReducer,
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
});

const middleware = [thunk];

// const data = localStorage.getItem("post")
//   ? JSON.parse(localStorage.getItem("post"))
//   : [];

const initialState = {
  // data: { post: data, loading: false, error: "" },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
