// ErrorPopup.js

import React, { useState, useEffect } from 'react';
import '../css/DevNotes.css';

const DevNotes = ({ showPopup } ) => {
  const [isVisible, setIsVisible] = useState(showPopup);

  useEffect(() => {
    setIsVisible(showPopup);
  }, [showPopup]);

  const handleAcknowledge = () => {
    setIsVisible(false);
    // You can add additional logic here if needed
    // For example, reload the screen.
  };

  return (
    <div className={`error-popup ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content"><img id="aventislogo"src='https://825061250-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fm6x15P2F6N643Tu8klQ8%2Fuploads%2FOZOt82cizbCqjzb5caIx%2FLogo%20Only.png?alt=media&token=fbd5353b-4292-4407-bce7-5c1761cadba9'></img>
        <h1>Developer Notes</h1>
        <p><b><eugene id='eugene'>Hi I am Eugene.</eugene> <keith id="keith">Hi I am Keith.</keith></b> Together we are developers at Aventis Metaverse.</p>
        <mark><p>This is our Proof of Concept for Artificial Intelligence in AI. Our models are trained specifically to tailor to the needs of faculty and students in our Graduate Diploma Program for Cyber Secuirty.</p>,
        <p>For more information, do read our medium paper : <p></p><a href='https://medium.com/@AventisMetaverse/aventis-metaverse-wisdom-keeper-concept-paper-a6c02e7c5de9' id='linkurl'>https://medium.com/@AventisMetaverse/aventis-metaverse-wisdom-keeper-concept-paper-a6c02e7c5de9</a></p></mark>
        <br></br><br></br><button id="okbtn"onClick={handleAcknowledge}>OK</button>
      </div>
    </div>
  );
};

export default DevNotes;