// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend API endpoint
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });

      // Assuming the backend returns a success message upon successful login
      if (response.data === 'Login successful') {
        // If login is successful, navigate to the home page
        navigate('/home');
      } else {
        // Handle other responses or errors from the backend
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="login_submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
