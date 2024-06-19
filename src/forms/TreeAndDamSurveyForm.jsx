import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TreeAndDamSurveyForm.css';
import apiConfig from '../apiConfig'; 

const TreeAndDamSurveyForm = () => {
  const [formData, setFormData] = useState({
    surveyNumber: '',
    village: '',
    wardNumber: '',
    locality: '',
    khasraNumber: '',
    landOwnerName: '',
    category: '',
    treeName: '',
    treeGirth: '',
    treeAge: '',
    treeDetails: '',
    damType: '',
    damDetails: '',
    damLength: '',
    damWidth: '',
    damHeight: '',
    damOtherDetails: '',
    ownerSignature: '',
    surveyTeamNames: '',
    surveyDate: '',
    patwariName: '',
    assistantEngineerName: ''
  });

  const [error, setError] = useState('');

  const sendData = async (data) => {
    try {
      const response = await axios.post(`${apiConfig.baseURL}/api/tree-surveys/add`, data);
      console.log('Form submitted successfully:', response.data);
      window.alert('Form submitted successfully');
      window.location.href = '/home';
    } catch (error) {
      console.error('Error submitting the form', error);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData };
    sendData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="tree-dam-survey-form-container">
      <h1 className="title">वृक्षो एवं बंधा की नापी का प्रारूप</h1>
      <form className="tree-dam-survey-form" onSubmit={handleSubmit}>
        {/* UID */}
        <div className="form-group">
          <label htmlFor="uId">UID</label>
          <input
            type="number"
            id="uId"
            name="uId"
            value={formData.uId}
            onChange={handleChange}
            onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
            required
          />
        </div>
        {/* Survey Number */}
        <div className="form-group">
          <label htmlFor="surveyNumber">सर्वे दल क्र. :-</label>
          <input
            type="text"
            id="surveyNumber"
            name="surveyNumber"
            value={formData.surveyNumber}
            onChange={handleChange}
            required
          />
        </div>
        {/* Village */}
        <div className="form-group">
          <label htmlFor="village">ग्राम:</label>
          <select
            id="village"
            name="village"
            value={formData.village}
            onChange={handleChange}
            required
          >
            <option value="">कोई विकल्प चुनें</option>
            <option value="panjreh">पंजरेह</option>
            <option value="medhauli">मेढौली</option>
            <option value="chatka">चटका</option>
            <option value="jingurdah">झिंगुरदाह</option>
            <option value="churida">चुरिदह</option>
          </select>
        </div>
        {/* Ward Number */}
        <div className="form-group">
          <label htmlFor="wardNumber">वार्ड नंबर:</label>
          <input
            type="number"
            id="wardNumber"
            name="wardNumber"
            value={formData.wardNumber}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>
        {/* Locality */}
        <div className="form-group">
          <label htmlFor="locality">मोहल्ला/टोला/कॉलोनी:</label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </div>
        {/* Khasra Number */}
        <div className="form-group">
          <label htmlFor="khasraNumber">खसरा नंबर:</label>
          <input
            type="text"
            id="khasraNumber"
            name="khasraNumber"
            value={formData.khasraNumber}
            onChange={handleChange}
            required
          />
        </div>
        {/* Land Owner Name */}
        <div className="form-group">
          <label htmlFor="landOwnerName">भू - स्वामी का नाम (खसरे पर आधारित):</label>
          <input
            type="text"
            id="landOwnerName"
            name="landOwnerName"
            value={formData.landOwnerName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Category */}
        <div className="form-group">
          <label htmlFor="category">वर्ग (SC/ST/OBC/GEN):</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">कोई विकल्प चुनें</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="GEN">GEN</option>
          </select>
        </div>
        {/* Tree Details */}
        <div className="form-group">
          <label>वृक्ष का विवरण</label>
          <div>
            <label htmlFor="treeName">वृक्ष का नाम :</label>
            <input
              type="text"
              id="treeName"
              name="treeName"
              value={formData.treeName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="treeGirth">मोटाई (Mtr):</label>
            <input
              type="number"
              id="treeGirth"
              name="treeGirth"
              value={formData.treeGirth}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="treeAge">वृक्ष की उम्र (वर्षों में):</label>
            <input
              type="number"
              id="treeAge"
              name="treeAge"
              value={formData.treeAge}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="treeDetails">अन्य विवरण:</label>
            <textarea
              id="treeDetails"
              name="treeDetails"
              value={formData.treeDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        {/* Dam Details */}
        <div className="form-group">
          <label>बंधा का विवरण</label>
          <div>
            <label htmlFor="damType">बंधा का प्रकार:</label>
            <input
              type="text"
              id="damType"
              name="damType"
              value={formData.damType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="damDetails">बंधा का पूर्ण विवरण:</label>
            <textarea
              id="damDetails"
              name="damDetails"
              value={formData.damDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="damLength">बंधा की लंबाई (Mtr):</label>
            <input
              type="number"
              id="damLength"
              name="damLength"
              value={formData.damLength}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="damWidth">बंधा की चौड़ाई (Mtr):</label>
            <input
              type="number"
              id="damWidth"
              name="damWidth"
              value={formData.damWidth}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="damHeight">बंधा की ऊंचाई (Mtr):</label>
            <input
              type="number"
              id="damHeight"
              name="damHeight"
              value={formData.damHeight}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="damOtherDetails">अन्य विवरण:</label>
            <textarea
              id="damOtherDetails"
              name="damOtherDetails"
              value={formData.damOtherDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        {/* Owner's Name and Signature */}
        <div className="form-group">
          <label htmlFor="ownerSignature">भूमि / वृक्ष / बंधा स्वामी का नाम एवं हस्ताक्षर:</label>
          <textarea
            id="ownerSignature"
            name="ownerSignature"
            value={formData.ownerSignature}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Survey Team Members */}
        <div className="form-group">
          <label htmlFor="surveyTeamNames">सर्वेक्षण दल के सदस्यों के नाम:</label>
          <input
            type="text"
            id="surveyTeamNames"
            name="surveyTeamNames"
            value={formData.surveyTeamNames}
            onChange={handleChange}
            required
          />
        </div>
        {/* Survey Date */}
        <div className="form-group">
          <label htmlFor="surveyDate">सर्वेक्षण का दिन:</label>
          <input
            type="date"
            id="surveyDate"
            name="surveyDate"
            value={formData.surveyDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* Patwari Name */}
        <div className="form-group">
          <label htmlFor="patwariName">पटवारी / हल्का पटवारी का नाम:</label>
          <input
            type="text"
            id="patwariName"
            name="patwariName"
            value={formData.patwariName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Assistant Engineer Name */}
        <div className="form-group">
          <label htmlFor="assistantEngineerName">उपयंत्री का नाम:</label>
          <input
            type="text"
            id="assistantEngineerName"
            name="assistantEngineerName"
            value={formData.assistantEngineerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default TreeAndDamSurveyForm;
