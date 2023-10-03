import React, { useState } from 'react';

function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, deselect it
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 2) {
      // If less than 2 options are selected, select the option
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isOptionSelected = (option) => selectedOptions.includes(option);

  return (
    <div>
      <h2>Quiz Question</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              value="Option 1"
              checked={isOptionSelected("Option 1")}
              onChange={() => handleOptionClick("Option 1")}
            />
            Option 1
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="Option 2"
              checked={isOptionSelected("Option 2")}
              onChange={() => handleOptionClick("Option 2")}
            />
            Option 2
          </label>
        </li>
        {/* Add more answer choices */}
      </ul>
      <button onClick={() => console.log(selectedOptions)}>Submit</button>
    </div>
  );
}

export default Quiz;
