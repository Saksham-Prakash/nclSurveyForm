import React, { useState } from 'react';
import './FamilyDetailsForm.css';
import axios from 'axios';


const FamilyDetailsForm = () => {
    // Initializing state for all form fields
    const [formData, setFormData] = useState({
        surveyNumber: '',
        village: 'कोई विकल्प चुनें',
        wardNumber: '',
        locality: '',
        khasraNumber: '',
        houseNumber: '',
        landOwnerName: '',
        category: 'कोई विकल्प ',
        familyMembers: '',
        relationshipHouseOwner: '',
        relationshipLandOwner: '',
        age: '',
        sex: 'कोई विकल्प चुनें',
        maritalStatus: 'कोई विकल्प चुनें',
        educationStatus: '',
        residenceDuration: '',
        submittedDocuments: {
            "aadhaar/आधार कार्ड": false,
            "voterid/वोटर आईडी": false,
            "ration/राशन कार्ड ": false,
            "pan/पैन कार्ड": false,
            "bank/बैंक अकाउंट विवरण": false,
            "license/ड्राइविंग लाइसेंस ": false,
            "passport/पासपोर्ट": false,
            "age proof/आयु प्रमाण पत्र": false,
            "widowproof/विधवा या विधुर प्रमाण पत्र": false,
            "samagraid/समग्रआईडी": false
        },
        occupation: '',
        employmentDuration: '',
        employmentDocuments: '',
        houseOutside: 'yes',
        outsideHouseAddress: '',
        compensationPreference: 'yes',
        surveyTeamNames: '',
        surveyDate: '',
        patwariName: '',
        assistantEngineerName: ''
    });


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/family-details/add', formData);
            if (response.status === 201) {
                alert('Family Details  saved successfully');
                window.location.href = '/home'; // Redirect to home page
            } else {
                alert('Failed to save public structure survey');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    };
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            submittedDocuments: {
                ...formData.submittedDocuments,
                [name]: checked
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <div className="family-details-form-container">
            <h1 className="title">परिवार के विवरण</h1>
            <form className="family-details-form" onSubmit={handleSubmit}>
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
                {/* Survey Number */}
                <div className="form-group">
                    <label htmlFor="surveyNumber">सर्वे दल क्र. :-</label>
                    <input
                        type="number"
                        id="surveyNumber"
                        name="surveyNumber"
                        value={formData.surveyNumber}
                        onChange={handleChange}
                        onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
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
                        onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
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
                        type="number"
                        id="khasraNumber"
                        name="khasraNumber"
                        value={formData.khasraNumber}
                        onChange={handleChange}
                        onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
                        required
                    />
                </div>

                {/* House Number */}
                <div className="form-group">
                    <label htmlFor="houseNumber">मकान नंबर:</label>
                    <input
                        type="text"
                        id="houseNumber"
                        name="houseNumber"
                        value={formData.houseNumber}
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

                {/* Family Members */}
                <div className="form-group">
                    <label htmlFor="familyMembers">Name of Family Members / परिवार के सदस्यों का नाम (पिता/पति का नाम):</label>
                    <input
                        type='text'
                        id="familyMembers"
                        name="familyMembers"
                        value={formData.familyMembers}
                        onChange={handleChange} required
                    ></input>
                </div>

                {/* Relationship with House Owner */}
                <div className="form-group">
                    <label htmlFor="relationshipHouseOwner">Relation with title of house holder / मकान मालिक से सम्बन्ध:</label>
                    <input
                        type="text"
                        id="relationshipHouseOwner"
                        name="relationshipHouseOwner"
                        value={formData.relationshipHouseOwner}
                        onChange={handleChange} required
                    />
                </div>

                {/* Relationship with Land Owner */}
                <div className="form-group">
                    <label htmlFor="relationshipLandOwner">Relation with title of land owner/ भूमि मालिक से सम्बन्ध:</label>
                    <input
                        type="text"
                        id="relationshipLandOwner"
                        name="relationshipLandOwner"
                        value={formData.relationshipLandOwner}
                        onChange={handleChange} required
                    />
                </div>

                {/* Age */}
                <div className="form-group">
                    <label htmlFor="age">age / उम्र:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); } }}
                        required
                    />
                </div>

                {/* Sex */}
                <div className="form-group">
                    <label htmlFor="sex">Sex / लिंग:</label>
                    <select
                        id="sex"
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange} required
                    >
                        <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Marital Status */}
                <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status/ वैवाहिक स्थिति :</label>
                    <select
                        id="maritalStatus"
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange} required
                    >
                        <option value="कोई विकल्प चुनें">कोई विकल्प चुनें</option>
                        <option value="widow">Widow/विधवा</option>
                        <option value="widower">Widower/विधुर</option>
                        <option value="divorced">Divorced/परित्यक्ता</option>
                        <option value="single">Single/अविवाहित</option>
                        <option value="married">Married/विवाहित</option>
                    </select>
                </div>

                {/* Educational Status */}
                <div className="form-group">
                    <label htmlFor="educationStatus">Educational Status (शिक्षा स्तर):</label>
                    <input
                        type="text"
                        id="educationStatus"
                        name="educationStatus"
                        value={formData.educationStatus}
                        onChange={handleChange} required
                    />
                </div>

                {/* Residence Duration */}
                <div className="form-group">
                    <label htmlFor="residenceDuration">कब से यहाँ निवास कर रहे है (वर्ष एवं माह)?:</label>
                    <input
                        type="text"
                        id="residenceDuration"
                        name="residenceDuration"
                        value={formData.residenceDuration}
                        onChange={handleChange} required
                    />
                </div>
                {/* Submitted Documents */}
                <div className="form-group">
                    <label>जमा किये गए दस्तावेज (टिक करे):</label>
                    <div className="checkbox-group">
                        {Object.entries(formData.submittedDocuments).map(([document, isChecked]) => (
                            <label key={document}>
                                <input
                                    type="checkbox"
                                    name={document}
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                {document}
                            </label>
                        ))}
                    </div>
                </div>
                {/* Occupation Dropdown */}
                <div className="form-group">
                    <label htmlFor="occupation">व्यवसाय :</label>
                    <select id="occupation" name="occupation">
                        <option value="">-- व्यवसाय का चयन करें --</option>
                        <option value="कारीगर">कारीगर</option>
                        <option value="छोटे व्यापारी">छोटे व्यापारी</option>
                        <option value="पशुबडा">पशुबडा</option>
                        <option value="स्व-नियोजित">स्व-नियोजित</option>
                        {/* Add more occupation options as needed */}
                    </select>
                </div>

                {/* Employment Duration */}
                <div className="form-group">
                    <label htmlFor="employmentDuration">कब से अधिग्रहित क्षेत्र में रोजगार कर रहे (वर्ष एवं माह):</label>
                    <input
                        type="text"
                        id="employmentDuration"
                        name="employmentDuration"
                        value={formData.employmentDuration}
                        onChange={handleChange} required
                    />
                </div>

                {/* Documents Proving Employment */}
                <div className="form-group">
                    <label htmlFor="employmentDocuments">कोई प्रपत्र या दस्तावेज जो सिद्ध करे:</label>
                    <input
                        type="text"
                        id="employmentDocuments"
                        name="employmentDocuments"
                        value={formData.employmentDocuments}
                        onChange={handleChange} required
                    ></input>
                </div>

                {/* House Outside Acquired Land */}
                <div className="form-group">
                    <label>क्या आपके पास अधिग्रहित भूमि क्षेत्र से बाहर भी मकान है ?</label>
                    <div className="radio-group">
                        <label className="radio">
                            <input type="radio" name="houseOutsideAcquiredLand" value="yes" />
                            <span>हां</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="houseOutsideAcquiredLand" value="no" />
                            <span>नहीं</span>
                        </label>
                    </div>
                </div>

                {/* House Outside Address */}
                <div className="form-group">
                    <label htmlFor="outsideHouseAddress">अधिगृहित भूमि क्षेत्र से बाहर के मकान का पूर्ण पता:</label>
                    <input
                        type="text"
                        name="outsideHouseAddress"
                        value={formData.outsideHouseAddress}
                        onChange={handleChange}
                    ></input>
                </div>

                {/* Compensation Preference */}
                <div className="form-group">
                    <label htmlFor='compensationPreference'>पात्र होने की स्थिति में क्या आप अधिग्रहित मकान के एवज में प्लाट या प्लाट के बदले नगद राशि लेना चाहते है:</label>
                    <div className="radio-group">
                        <label className="radio">
                            <input type="radio" name="takeCash" value="yes" />
                            <span>हां</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="takeCash" value="no" />
                            <span>नहीं</span>
                        </label>
                    </div>
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

                {/* Survey Date */}
                <div className="form-group">
                    <label htmlFor="surveyDate">सर्वेक्षण का दिन:</label>
                    <input
                        type="date"
                        id="surveyDate"
                        name="surveyDate"
                        value={formData.surveyDate}
                        onChange={handleChange} required
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
                        onChange={handleChange} required
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
                        onChange={handleChange} required
                    />
                </div>

                {/* Submit Button */}
                <div className="submit-button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FamilyDetailsForm;
