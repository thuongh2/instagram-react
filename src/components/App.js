import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Main/Home.js";
import Login from "./Login/Login";
import ProfileMain from "./Profile/ProfileMain.js";
import PostImage from "./Profile/PostImage.js";
import Saved from "./Profile/Saved.js";
import Tagged from "./Profile/Tagged.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}>
          
        </Route>
        <Route index path="/login" element={<Login />} />
        <Route path="/profile/*" element={<ProfileMain />}>
          <Route path="" element={<PostImage />} />
          <Route path="saved" element={<Saved />} />
          <Route path="tagged" element={<Tagged />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
