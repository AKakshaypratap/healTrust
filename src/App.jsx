import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import MedicalConsultation from "./pages/MedicalConsultation";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicalConsultation" element={<MedicalConsultation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
