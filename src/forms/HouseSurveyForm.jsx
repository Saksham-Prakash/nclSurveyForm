import React, { useState } from 'react';
import './HouseSurveyForm.css';
import axios from 'axios';
import apiConfig from '../apiConfig'; 

const HouseSurveyForm = () => {
  const [formData, setFormData] = useState({
    surveyNumber: '',
    village: '',
    wardNumber: '',
    locality: '',
    ownerName: '',
    casteCategory: '',
    specialCategory: '',
    ownerRelation: '',
    buildingUsage: '',
    otherUsageDetails: '', // Add this if you have a conditional field
    ownerAge: '',
    electricity: '',
    waterSupply: '',
    typeOfRoad: '',
    roadDistance: '',
    houseNumber: '',
    houseOwner: '',
    plotNumber: '',
    plotArea: '',
    houseType: '',
    houseDetails: '',
    houseWidth: '',
    houseHeight: '',
    houseLength: '',
    wellDepth: '',
    wellDiameter: '',
    additionalInfo: '',
    patwariName: '',
    deputyEng: '',
    nclMembers: ''
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
      const response = await axios.post(`${apiConfig.baseURL}/api/house-surveys/add`, formData);
      console.log(response.data);
      window.alert('Form submitted successfully');
      // Redirect to the homepage after successful submission
      window.location.href = '/home'; // Adjust the URL if needed
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='house-survey-form'>
      <h1 className="title">मकान नापी का प्रारूप </h1>
      {/* Unique Id */}
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
      <div>
        <label>सर्वे दल क्र.:</label>
        <input type="number" name="surveyNumber" value={formData.surveyNumber} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}

          required />
      </div>
      <div>
        <label>ग्राम:</label>
        <select name="village" value={formData.village} onChange={handleChange} required className="large-dropdown">
          <option value="">कोई विकल्प चुनें</option>
          <option value="पंजरेह">पंजरेह</option>
          <option value="मेढौली">मेढौली</option>
          <option value="चटका">चटका</option>
          <option value="झिंगुरदाह">झिंगुरदाह</option>
          <option value="चुरिदह">चुरिदह</option>
        </select>
      </div>
      <div>
        <label>वार्ड नंबर:</label>
        <input type="number" name="wardNumber" value={formData.wardNumber} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required className='ward-no' />
      </div>
      <div>
        <label>मोहल्ला/टोला/कालोनी:</label>
        <input type="text" name="locality" value={formData.locality} onChange={handleChange} required />
      </div>
      <div>
        <label>भू - स्वामी का नाम (खसरे पर आधारित):</label>
        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
      </div>
      <div className="radio-group">
        <label>जाति:</label>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="casteCategory"
              value="SC"
              checked={formData.casteCategory === 'SC'}
              onChange={handleChange} required
            />
            SC
          </label>
          <label>
            <input
              type="radio"
              name="casteCategory"
              value="ST"
              checked={formData.casteCategory === 'ST'}
              onChange={handleChange} required
            />
            ST
          </label>
          <label>
            <input
              type="radio"
              name="casteCategory"
              value="OBC"
              checked={formData.casteCategory === 'OBC'}
              onChange={handleChange} required
            />
            OBC
          </label>
          <label>
            <input
              type="radio"
              name="casteCategory"
              value="GEN"
              checked={formData.casteCategory === 'GEN'}
              onChange={handleChange} required
            />
            GEN
          </label>
        </div>
      </div>
      <div>
        <label>निवासरत व्यक्ति(अलग हो तो उसका पूर्ण पता):</label>
        <input type="text" name="specialCategory" value={formData.specialCategory} onChange={handleChange} required />
      </div>
      <div>
        <label>भवन स्वामी का नाम (भू स्वामी से संबंध) :</label>
        <input type="text" name="ownerRelation" value={formData.ownerRelation} onChange={handleChange} required />
      </div>
      <div>
        <label>भवन का उपयोग:</label>
        <select name="buildingUsage" value={formData.buildingUsage} onChange={handleChange} required>
          <option value="">कोई विकल्प चुनें</option>
          <option value="आवासीय">आवासीय</option>
          <option value="व्यवसायिक">व्यवसायिक (जैसे दुकान / कार्यालय / गोडाउन)</option>
          <option value="अन्य">अन्य (विवरण देवें)</option>
        </select>
        {formData.buildingUsage === 'अन्य' && (
          <div>
            <label>विवरण देवें:</label>
            <input type="text" name="otherUsageDetails" value={formData.otherUsageDetails} onChange={handleChange} required />
          </div>
        )}
      </div>
      <div>
        <label>सरंचना की उम्र:</label>
        <input type="number" name="ownerAge" value={formData.ownerAge} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required />
      </div>
      <div>
        <label>मकान में बिजली की व्यवस्था (ऍमपीईबी द्वारा):</label>
        <select name="electricity" value={formData.electricity} onChange={handleChange} required>
          <option value="">कोई विकल्प चुनें</option>
          <option value="हाँ">हाँ</option>
          <option value="नहीं">नहीं</option>
        </select>
      </div>
      <div>
        <label>मकान में पानी की व्यवस्था:</label>
        <select name="waterSupply" value={formData.waterSupply} onChange={handleChange} required>
          <option value="">कोई विकल्प चुनें</option>
          <option value="नगरपालिक">नगरपालिक</option>
          <option value="निगम">निगम</option>
          <option value="ग्राम योजना">ग्राम</option>
        </select>
      </div>
      <div>
        <label>मकान के सामने के रोड प्रकार</label>
        <select name="typeOfRoad" value={formData.typeOfRoad} onChange={handleChange} required>
          <option value="">कोई विकल्प चुनें</option>
          <option value="मुख्य मार्ग">मुख्य मार्ग</option>
          <option value="डब्लू०बी०एन०">डब्लू०बी०एन०</option>
          <option value="मुख्य मार्ग से हटकर">मुख्य मार्ग से हटकर</option>
        </select>
      </div>
      <div>
        <label>मार्ग से मकान की दुरी (मी०):</label>
        <input type="number" name="roadDistance" value={formData.roadDistance} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required />
      </div>
      <div>
        <label>मकान क्रमांक:</label>
        <input type="number" name="houseNumber" value={formData.houseNumber} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required />
      </div>
      <div>
        <label>मकान स्वामी का नाम एवं पिता/पति का नाम :</label>
        <input type="text" name="houseOwner" value={formData.houseOwner} onChange={handleChange} required />
      </div>
      <div>
        <label>खसरा / प्लाट संख्या :</label>
        <input type="text" name="plotNumber" value={formData.plotNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>प्लाट का क्षेत्रफल (sq mtr):</label>
        <input type="number" name="plotArea" value={formData.plotArea} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required />
      </div>
      <div>
        <label>मकान का प्रकार (कोड न.):</label>
        <input type="number" name="houseType" value={formData.houseType} onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
            }
          }}
          required />
      </div>
      <div>
        <label>मकान से सम्बंधित कोई विशेष जानकारी :</label>
        <input type="text" name="houseDetails" value={formData.houseDetails} onChange={handleChange} required />
      </div>
      <div>
        <label>मकान की चौड़ाई (mtr):</label>
        <input type="number" name="houseWidth" value={formData.houseWidth} onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
          required />
      </div>
      <div>
        <label>मकान की ऊंचाई (mtr):</label>
        <input type="number" name="houseHeight" value={formData.houseHeight} onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
          required />
      </div>
      <div>
        <label>मकान की लंबाई (mtr):</label>
        <input type="number" name="houseLength" value={formData.houseLength} onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
          required />
      </div>
      <div>
        <label>कुंआ की गहराई (mtr):</label>
        <input type="number" name="wellDepth" value={formData.wellDepth} onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
          required />
      </div>
      <div>
        <label>कुंआ की व्यास (mtr):</label>
        <input type="number" name="wellDiameter" value={formData.wellDiameter} onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
          required />
      </div>
      <div>
        <label>टिप्पणी:</label>
        <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} required />
      </div>
      <div>
        <label>पटवारी का नाम:</label>
        <input type="text" name="patwariName" value={formData.patwariName} onChange={handleChange} required />
      </div>
      <div>
        <label>उपयंत्री का नाम:</label>
        <input type="text" name="deputyEng" value={formData.deputyEng} onChange={handleChange} required />
      </div>
      <div>
        <label>NCL सर्वेक्षण दल के सदस्यों का नाम:</label>
        <input type="text" name="nclMembers" value={formData.nclMembers} onChange={handleChange} required />
      </div>
      <div className="submit-button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default HouseSurveyForm;
