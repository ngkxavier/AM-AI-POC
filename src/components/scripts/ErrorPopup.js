// ErrorPopup.js

import React, { useState, useEffect } from 'react';
import '../css/ErrorPopup.css';

const ErrorPopup = ({ showError } ) => {
  const [isVisible, setIsVisible] = useState(showError);

  useEffect(() => {
    setIsVisible(showError);
  }, [showError]);

  const handleAcknowledge = () => {
    setIsVisible(false);
    // You can add additional logic here if needed
    // For example, reload the screen.
    window.location.reload();
  };

  return (
    <div className={`error-popup ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <h1>An error occurred. Please acknowledge and reload the page.</h1>
        <p>Possible Causes for this Error :</p>
        <p>1)Invalid Essay Format</p>
        <p>2)Essay does not meet Required Length</p>
        <br/>
        <p>Do not be afraid to contact us on discord or telegram if you need help!</p>
        <button onClick={handleAcknowledge}>OK</button>
      </div>
    </div>
  );
};

export default ErrorPopup;