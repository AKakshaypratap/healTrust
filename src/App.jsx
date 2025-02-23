import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
