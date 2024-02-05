import React from 'react';
import { useState, useEffect } from 'react';
import '../css/TeacherOutput.css';

const TeacherOutput = (output) => {
  const [error, setError] = useState(false)
  const [percentage, setPercentage] = useState(0);
  const [comments, setComments] = useState(output.output);

  const displayStatus = async () => {
    if (output == null) {
      setPercentage('');
      setComments("Invalid Input! Try Again Later")
    } else {

      try {
        const percentagePattern = /\b\d+(\.\d+)?\b/g; // Regex pattern to match percentages
        const matches = comments.match(percentagePattern);
        setPercentage(matches[0])
      } catch (error) {
        setPercentage(0);
      }
    }
  }

  useEffect(() => {
    displayStatus();
  }, [output])

  return (
    <div className="page-container">
      <div className="results-container">
        <p className="grade-percentage">{percentage}</p>
        <div className="dynamic-text-container">
          {/* Dynamic text content goes here */}
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherOutput;
