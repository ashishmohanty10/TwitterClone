import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesLinks } from "../lib/Routes";

const Body = () => {
  return (
    <Router>
      <Routes>
        {RoutesLinks.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Router>
  );
};

export default Body;
