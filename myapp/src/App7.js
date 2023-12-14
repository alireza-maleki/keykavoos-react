import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./router/Header";
import About from "./router/About";
import Home from "./router/Home";
import Services from "./router/Services";
import Profile from "./router/Profile/Profile";
import Change from "./router/Profile/Change";
import Password from "./router/Profile/Password";
import Setting from "./router/Profile/Setting";
import Name from "./router/Name";
import Subsetting from "./router/Subsetting";
import App8 from "./App8";
import App9 from "./App9";
import App10 from "./App10";


const App7 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="user" element={<App8 />} />
        <Route path="user/:id" element={<App9 />} />
        <Route path="user/:id/:comments" element={<App10 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App7;
