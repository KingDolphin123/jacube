import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";


import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="main-content">
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
