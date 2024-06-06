import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import ServicePage from "./Components/Main/Sub/ServicePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicepage" element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;
