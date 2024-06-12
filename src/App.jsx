import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HouseSurveyForm from './forms/HouseSurveyForm';
import TreeAndDamSurveyForm from './forms/TreeAndDamSurveyForm';
import FamilyDetailsForm from './forms/FamilyDetailsForm';
import PublicStructureSurveyForm from './forms/PublicStructureSurveyForm';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route to login */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/house-survey" element={<HouseSurveyForm />} />
        <Route path="/tree-dam-survey" element={<TreeAndDamSurveyForm />} />
        <Route path="/family-details" element={<FamilyDetailsForm />} />
        <Route path="/public-structure-survey" element={<PublicStructureSurveyForm />} />
      </Routes>
    </Router>
  );
};

export default App;
