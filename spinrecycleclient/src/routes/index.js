import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Shop from "../views/Shop";

export default function Routing() {
  return (
    <Routes>
      <Route exact path="" component />
      <Route exact path="" component />
      <Route exact path="/shop" component={() => <Shop />} />
    </Routes>
  );
}
