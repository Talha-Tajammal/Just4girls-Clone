import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Payment from "./Pages/PaymentOption";
import Privacy from "./Pages/PrivacyPolicy";
import Return from "./Pages/ReturnExchange";
import Shipping from "./Pages/ShippingInformation";
import Navbar from "./Common/NavBar";
import Menuroutes from "./Common/Menuroutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PaymentOption" element={<Payment />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="/ReturnExchange" element={<Return />} />
          <Route path="/ShippingInformation" element={<Shipping />} />
          <Route path="/*" element={<Menuroutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
