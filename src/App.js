import React from "react";
import './App.css'
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="Container">
      <h1 className="Heading">Auth-Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
