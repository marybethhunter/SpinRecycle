import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Shop from "../views/Shop";
import AddRecord from "../views/AddRecord";

export default function Routing() {
  return (
    <Routes>
      {/* <Route exact path={["/", "/home"]} element={<Home />} /> */}
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/shop' element={<Shop />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/addRecord' element={<AddRecord />} />
    </Routes>
  );
}
