import React from 'react'

function DropDownList(props) {
  const { options, onOptionChange } = props;

  function handleOptionSelect(event) {
    console.log(props);
    console.log(onOptionChange);
    console.log(event.target.value);
    onOptionChange(event.target.value);
  }

  return (
    <select onChange={handleOptionSelect}>
      {options.map((option, index) =>
        <option key={index} value={option}>{option}</option>
      )}
    </select>
  );
}

export default DropDownList