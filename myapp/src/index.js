import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import Todoapp from "./Todoapp";
import Props from "./Props";
import Props2 from "./Props2";
import { Provider } from "react-redux";
import store from "./Redux2/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App7 />
  </Provider>
);
