// BackToTopButtonWrapper.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BackToTopButton } from './BackToTopButton';

export const BackToTopButtonWrapper = () => {
  const location = useLocation();
  
  // Render the BackToTopButton only if the path is not '/'
  if (location.pathname !== '/') {
    return <BackToTopButton />;
  } else {
    return null; // Do not render anything if the path is '/'
  }
};

