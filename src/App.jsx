import React, { Component } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";


const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Roots />}>
    <Route index element={<Home />} ></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Service" element={<Service/>}></Route>
  </Route>)
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
