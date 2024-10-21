// src/views/Home.jsx
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/art/${prompt}`);
  };

  return (
    <div>
      <h1>Welcome to Art Generator!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Enter your art prompt"
        />
        <button type="submit">Generate Art</button>
      </form>
    </div>
  );
};
