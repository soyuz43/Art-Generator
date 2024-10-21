// src/Routes.jsx
// Filepath: art-generator/frontend/src/Routes.jsx
// Description: Defines client-side routes for the application

import React from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { ArtDisplay } from './components/ArtDisplay';

export const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art/:prompt" element={<ArtDisplay />} /> {/* New route */}
      </Routes>
    </BrowserRouter>
  );
};
