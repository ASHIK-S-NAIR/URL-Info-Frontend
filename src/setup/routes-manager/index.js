import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "pages/components/Nav";
import Home from "pages/Home";
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";
import PNF from "pages/PNF";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PNF />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
