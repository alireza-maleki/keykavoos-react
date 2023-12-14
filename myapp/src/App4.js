import React from "react";
import Home from "./react-router/Home";
import Account from "./react-router/Account";
import Setting from "./react-router/Setting";
import Header from "./react-router/Header";
import Profile from "./react-router/profile/Profile";
import Edit from "./react-router/profile/Edit";
import Price from "./react-router/profile/Price";
import Subsetting from "./react-router/profile/Subsetting";
import Continue from "./react-router/profile/Continue";
import Submit from "./react-router/profile/Submit";
import Name from "./Name";
import Age from "./Age";
import Users from "./Users";
import Post from "./Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./Comments";

const App4 = () => {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<Users />} />
        <Route path="user/:postId" element={<Post />} />
        <Route path="user/:postId/:userComment" element={<Comments />} />
        {/* <Route path="account" element={<Account />}/> */}
        {/* <Route path="setting" element={<Setting />}/> */}
        {/* <Route path="profile" element={<Profile />} /> */}
        {/* <Route path="profile/:name" element={<Name />} /> */}
        {/* <Route path="subsetting" element={<Subsetting />}/>
                <Route path="price" element={<Price />}/>
                <Route path="edit" element={<Edit />}>
                    <Route path="continue" element={<Continue />}/>
                </Route>
                <Route path="submit" element={<Submit />}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App4;
