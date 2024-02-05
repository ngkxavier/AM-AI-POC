import React from 'react';
import '../css/title.css'; // Ensure the CSS path is correct

const Title = ({ textData }) => {
    // Wrap each character in a span for animation
    const characters = textData.split('').map((char, index) => (
        <span 
            key={index} 
            className="animated-element"
            style={{
                animationDelay: `${Math.random() * 2}s`, // Random delay for each character
                animationDuration: '1s', // Duration of the animation for each character
            }}
        >
            {char !== ' ' ? char : '\u00A0'} {/* Preserve spaces */}
        </span>
    ));

    return <>{characters}</>; // Use React Fragment to avoid adding extra elements
};

export default Title;
