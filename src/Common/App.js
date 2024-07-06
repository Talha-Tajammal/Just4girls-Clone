import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Common/NavBar";
import Menuroutes from "./Common/Menuroutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Menuroutes />
    </Router>
  );
}

export default App;
