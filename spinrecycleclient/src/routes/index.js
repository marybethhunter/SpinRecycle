import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../views/Shop";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route exact path='' element />
        <Route exact path='' element />
        <Route exact path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
}
