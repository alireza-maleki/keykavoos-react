import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { myReducer } from "./reducer";
import { postReducer, userReducer, userPostReducer, commentReducer } from "./reducer";
import { todoReducer, pageReducer, paginateReducer, newDataReducer, searchReducer } from "./reducer";

const reducers = combineReducers({
  Post: postReducer,
  todo: todoReducer,
  page: pageReducer,
  paginate: paginateReducer,
  newData: newDataReducer,
  search: searchReducer,
  user: userReducer,
  userPost: userPostReducer,
  comment: commentReducer,
});

const middleware = [thunk];
// const data = localStorage.getItem("post") ? JSON.parse(localStorage.getItem("post")) : [];
const initialState = {
  // Post: {post: data, loading: false, },
};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
