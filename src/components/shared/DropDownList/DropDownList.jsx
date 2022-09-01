import React from 'react'

function DropDownList(props) {
  const { options, handleChangeValue } = props;

  return (
    <select>
      {options.map(option =>
        <option value={option} onChange={handleChangeValue}>{option}</option>
      )}
    </select>
  );
}

export default DropDownList