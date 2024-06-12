import React, { useState } from 'react';
import axios from 'axios';
import './PublicStructureSurveyForm.css';

const PublicStructureSurveyForm = () => {
  const [formData, setFormData] = useState({
    surveyNumber: '',
    village: 'कोई विकल्प चुनें',
    wardNumber: '',
    locality: '',
    khasraNumber: '',
    landOwnerName: '',
    category: 'कोई विकल्प चुनें',
    structureNumber: '',
    structureAge: '',
    publicStructureUse: '',
    publicStructureType: 'कोई विकल्प चुनें',
    inchargeName: '',
    organizationName: '',
    religiousStructureType: 'कोई विकल्प चुनें',
    khasraPlotNumber: '',
    structureDetails: '',
    structureLength: '',
    structureWidth: '',
    structureHeight: '',
    wellDepth: '',
    wellDiameter: '',
    handPumpBorewell: '',
    remarks: '',
    managerName: '',
    surveyTeamNames: '',
    patwariName: '',
    assistantEngineerName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/public-structure-survey/add', formData);
      if (response.status === 201) {
        alert('Public structure survey saved successfully');
        window.location.href = '/home'; // Redirect to home page
      } else {
        alert('Failed to save public structure survey');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  return (
    <div className="public-structure-survey-form-container">
      <h1 className="title">सार्वजनिक सरंचनाओ की नापी का प्रारूप</h1>
      {/* Unique Id */}
      <div className="public-structure-survey-form ">
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
      <form className="public-structure-survey-form" onSubmit={handleSubmit}>
        {/* Survey Number */}
        <div className="form-group">
          <label htmlFor="surveyNumber">सर्वे दल क्र. :-</label>
          <input
            type="text"
            id="surveyNumber"
            name="surveyNumber"
            value={formData.surveyNumber}
            onChange={handleChange} required
          />
        </div>

        {/* Village */}
        <div className="form-group">
          <label htmlFor="village">ग्राम:</label>
          <select
            id="village"
            name="village"
            value={formData.village}
            onChange={handleChange} required
          >
            <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
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
            onChange={handleChange} required
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
            onChange={handleChange} required
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
            onChange={handleChange} required
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category">वर्ग (SC/ST/OBC/GEN):</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange} required
          >
            <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="gen">GEN</option>
          </select>
        </div>

        {/* Structure Number */}
        <div className="form-group">
          <label htmlFor="structureNumber">सरंचना क्रमांक :</label>
          <input
            type="text"
            id="structureNumber"
            name="structureNumber"
            value={formData.structureNumber}
            onChange={handleChange} required
          />
        </div>

        {/* Structure Age */}
        <div className="form-group">
          <label htmlFor="structureAge">सरंचना की उम्र :</label>
          <input
            type="number"
            id="structureAge"
            name="structureAge"
            value={formData.structureAge}
            onChange={handleChange} onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Public Structure Use */}
        <div className="form-group">
          <label htmlFor="publicStructureUse">सार्वजनिक सरंचना का उपयोग :</label>
          <input
            type="text"
            id="publicStructureUse"
            name="publicStructureUse"
            value={formData.publicStructureUse}
            onChange={handleChange} required
          />
        </div>

        {/* Public Structure Type */}
        <div className="form-group">
          <label htmlFor="publicStructureType">सार्वजनिक सरंचना का प्रकार:</label>
          <select
            id="publicStructureType"
            name="publicStructureType"
            value={formData.publicStructureType}
            onChange={handleChange} required
          >
            <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
            <option value="government">सरकारी</option>
            <option value="religious">धार्मिक</option>
          </select>
        </div>

        {/* Incharge Name */}
        <div className="form-group">
          <label htmlFor="inchargeName">प्रभारी / व्यक्ति का नाम जिसके द्वारा प्रबंधन किया जा रहा है:</label>
          <input
            type="text"
            id="inchargeName"
            name="inchargeName"
            value={formData.inchargeName}
            onChange={handleChange} required
          />
        </div>

        {/* Department/Society/Trust/Committee Name */}
        <div className="form-group">
          <label htmlFor="organizationName">विभाग/सोसाइटी/ट्रस्ट/समिति का नाम:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange} required
          />
        </div>

        {/* Religious Structure Type */}
        <div className="form-group">
          <label htmlFor="religiousStructureType">यदि धार्मिक सरंचना हे तो उसका प्रकार:</label>
          <select
            id="religiousStructureType"
            name="religiousStructureType"
            value={formData.religiousStructureType}
            onChange={handleChange} required
          >
            <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
            <option value="temple">मंदिर</option>
            <option value="mosque">मस्जिद</option>
            <option value="gurdwara">गुरुद्वारा</option>
            <option value="church">चर्च</option>
            <option value="vihara">विहार</option>
            <option value="ghat">घाट</option>
            <option value="eidgah">ईदगाह</option>
            <option value="cremationGround">शमशानघाट</option>
            <option value="cemetery">कब्रिस्तान</option>
          </select>
        </div>

        {/* Khasra/Plot Number */}
        <div className="form-group">
          <label htmlFor="khasraPlotNumber">खसरा / प्लाट संख्या:</label>
          <input
            type="text"
            id="khasraPlotNumber"
            name="khasraPlotNumber"
            value={formData.khasraPlotNumber}
            onChange={handleChange} required
          />
        </div>

        {/* Structure Details */}
        <div className="form-group">
          <label htmlFor="structureDetails">सरंचना का पूर्ण विवरण:</label>
          <textarea
            id="structureDetails"
            name="structureDetails"
            value={formData.structureDetails}
            onChange={handleChange} required
          ></textarea>
        </div>

        {/* Structure Length */}
        <div className="form-group">
          <label htmlFor="structureLength">सरंचना की लम्बाई (mtr):</label>
          <input
            type="number"
            id="structureLength"
            name="structureLength"
            value={formData.structureLength}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Structure Width */}
        <div className="form-group">
          <label htmlFor="structureWidth">सरंचना की चौड़ाई (mtr):</label>
          <input
            type="number"
            id="structureWidth"
            name="structureWidth"
            value={formData.structureWidth}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Structure Height */}
        <div className="form-group">
          <label htmlFor="structureHeight">सरंचना की उचाई (mtr):</label>
          <input
            type="number"
            id="structureHeight"
            name="structureHeight"
            value={formData.structureHeight}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Well Depth */}
        <div className="form-group">
          <label htmlFor="wellDepth">कुआ की गहराई (mtr):</label>
          <input
            type="number"
            id="wellDepth"
            name="wellDepth"
            value={formData.wellDepth}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Well Diameter */}
        <div className="form-group">
          <label htmlFor="wellDiameter">कुआ की व्यास (mtr):</label>
          <input
            type="number"
            id="wellDiameter"
            name="wellDiameter"
            value={formData.wellDiameter}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            required
          />
        </div>

        {/* Hand Pump/Borewell */}
        <div className="form-group">
          <label htmlFor="handPumpBorewell">हैण्ड पंप /बोरवेल:</label>
          <input
            type="text"
            id="handPumpBorewell"
            name="handPumpBorewell"
            value={formData.handPumpBorewell}
            onChange={handleChange} required
          />
        </div>

        {/* Remarks */}
        <div className="form-group">
          <label htmlFor="remarks">टिप्पणी:</label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange} required
          ></textarea>
        </div>

        {/* Manager Name */}
        <div className="form-group">
          <label htmlFor="managerName">प्रभारी / व्यक्ति का नाम जिसके द्वारा प्रबंधन किया जा रहा है का नाम:</label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            value={formData.managerName}
            onChange={handleChange} required
          />
        </div>

        {/* Survey Team Members */}
        <div className="form-group">
          <label htmlFor="surveyTeamNames">सर्वेक्षण दल के सदस्यों के नाम:</label>
          <input
            type="text"
            id="surveyTeamNames"
            name="surveyTeamNames"
            value={formData.surveyTeamNames}
            onChange={handleChange} required
          />
        </div>

        {/* Patwari Name */}
        <div className="form-group">
          <label htmlFor="patwariName">पटवारी:</label>
          <input
            type="text"
            id="patwariName"
            name="patwariName"
            value={formData.patwariName}
            onChange={handleChange} required
          />
        </div>

        {/* Assistant Engineer Name */}
        <div className="form-group">
          <label htmlFor="assistantEngineerName">उपयंत्री:</label>
          <input
            type="text"
            id="assistantEngineerName"
            name="assistantEngineerName"
            value={formData.assistantEngineerName}
            onChange={handleChange} required
          />
        </div>

        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PublicStructureSurveyForm;
