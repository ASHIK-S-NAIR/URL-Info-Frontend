import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from '../../pages/components/Nav';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router;