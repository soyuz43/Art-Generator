// src/views/Home.jsx
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export const Home = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/art/${prompt}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Art Generator!</h1>
      <form onSubmit={handleSubmit} className="home-form">
        <input
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Enter your prompt"
          className="home-input"
        />
        <button type="submit" className="home-button">Generate Art</button>
      </form>
    </div>
  );
};
