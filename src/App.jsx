import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import MedicalConsultation from "./pages/MedicalConsultation";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
  
    if (!isAuthenticated) {
      loginWithRedirect();
      return null; // Prevents rendering until authentication
    }
    return children;
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicalConsultation"  element={
            <ProtectedRoute>
              <MedicalConsultation />
            </ProtectedRoute>
          } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
