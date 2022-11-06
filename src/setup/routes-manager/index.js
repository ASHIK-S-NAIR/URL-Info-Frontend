import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "pages/components/Nav";
import Home from "pages/Home";
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";
import PNF from "pages/PNF";
import Footer from "pages/components/Footer";
import { AuthContext } from "contexts/authContext";
import { isAuthenticated } from "api/auth";

const Router = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      setUserAuthenticated(true);
    }
  }, [userAuthenticated]);
  return (
    <AuthContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PNF />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
