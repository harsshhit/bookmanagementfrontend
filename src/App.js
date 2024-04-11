// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
