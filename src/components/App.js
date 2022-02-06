import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Main/Home.js";
import Login from "./Login/Login";
import ProfileMain from "./Profile/ProfileMain.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<ProfileMain />}/>
      </Routes>
    </>
  );
}

export default App;
