import React, { useState } from 'react';

const TextFieldForm = () => {

  // Create a state variable to hold the input value
    const [inputValue, setInputValue] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

  // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the inputValue here
        console.log('Submitted value:', inputValue);
        // Reset the input field
        setInputValue('');
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter text..."
            value={inputValue}
            onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );

};

export default TextFieldForm;
