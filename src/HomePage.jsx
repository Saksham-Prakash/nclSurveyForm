import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Some heading</h1>
      <div className="buttons-container">
        <Link to="/house-survey">
          <button className="form-button">मकान नापी का प्रारूप</button>
        </Link>

        <Link to="/family-details">
          <button className="form-button">परिवार के विवरण</button>
        </Link>

        <Link to="/tree-dam-survey">
          <button className="form-button">वृक्षो एवं बंधा की नापी का प्रारूप</button>
        </Link>

        <Link to="/public-structure-survey">
          <button className="form-button">सार्वजनिक सरंचनाओ की नापी का प्रारूप</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
