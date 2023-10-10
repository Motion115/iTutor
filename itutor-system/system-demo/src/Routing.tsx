import React from "react";
import { Route, Routes } from "react-router-dom";
import HomepageInDom from "./pages/home";

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
    </Routes>
  );
}
