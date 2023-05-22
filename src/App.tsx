import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContinentsPage from "./pages/ContinentsPage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/continent/:code" element={<CountriesPage />} />
        <Route
          path="/continent/:continentCode/country/:countryCode"
          element={<CountryDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
