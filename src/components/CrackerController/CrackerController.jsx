import React from 'react'
import { useState } from 'react';
import DropDownList from '../shared/DropDownList/DropDownList';

function CrackerController(props) {
  const { passwords, handleAddPassword, handleSetPasswordScore, handleCrack } = props;

  const [password, setPassword] = useState('');

  const scores = Array(passwords.length).fill(0).reduce((val, acc) => val + acc);

  return (
    <div>
      <div className='password-add'>
        <input type="text" placeholder='Add password' value={password} onChange={setPassword} />
        <button onClick={handleAddPassword}>Add password</button>
      </div>
      <div>
        <DropDownList options={passwords} handleChangeValue={ } /> : <DropDownList options={scores} />
      </div>
    </div>
  );
}

export default CrackerController