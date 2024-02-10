import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BackToTopButton = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleBackToTop = () => {
    navigate("/#home");
  };

  // Check if the current location is not the home page
  if (location.pathname !== '/') {
    return (
      <button className="backToTopButton" onClick={handleBackToTop}>
        ↑
      </button>
    );
  } else {
    // Return null if on the home page, hence not rendering the button
    return null;
  }
};