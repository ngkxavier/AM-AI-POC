import React, { useState, useEffect } from 'react';

import '../css/StudentAI.css';
import StudentOutput from './StudentOutput';

const StudentAI = () => {

    const [submitted, setSubmitted] = useState(false);
    const [outputDisplayed, setOutputDisplayed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log('Form submitted!');

        //Remove Input Field
        setSubmitted(true);

        //Show Output
        setOutputDisplayed(true);
    };

    return (
        <div className="centered-form">
            {!submitted && (
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>

                                <input type="text" placeholder="Type something..." />
                            </label>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </>
            )}

            {outputDisplayed && (
                <>
                <StudentOutput/>
                </>
            )
            
            }
        </div>
    )
}

export default StudentAI