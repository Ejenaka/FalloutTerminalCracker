import React from 'react'
import { useState } from 'react';
import DropDownList from '../shared/DropDownList/DropDownList';

function CrackerController(props) {
  const { 
    passwords,
    handleAddPassword,
    handleCurrentPasswordValueChange,
    handleCurrentPasswordScoreChange,
    handleCrack 
  } = props;

  const [password, setPassword] = useState('');

  const scores = Array(Math.max(...passwords.map(p => p.value.length))).fill().map((_, index) => index);
  const passwordsValues = passwords.map(p => p.value);

  const handleAddPasswordInput = (event) => setPassword(event.target.value);

  function getBestMatchedPassword(passwords) {
    const mockPasswords = [
      {value: 'DECEPTION', score: 1},
      {value: 'CIVILIZED', score: 1},
      {value: 'CLIPBOARD', score: 1},
      {value: 'COMPUTERS', score: 4},
      {value: 'COMMUNITY', score: 0},
    ];

    const withScores = mockPasswords.filter(p => p.score !== 0);
    const sortedByScore = withScores.sort((a, b) => b.score - a.score);
    const passwordWithHighestScore = sortedByScore[0];

    const matchingResults = [];
    for (let i = 1; i < sortedByScore.length; i++) {
      let comparedWord = sortedByScore[i].value;
      let commonChars = [];
      for (let j = 0; j < comparedWord.length; j++) {
        if (passwordWithHighestScore.value[j] === comparedWord[j]) {
          commonChars.push(comparedWord[j]);
        }        
      }
      matchingResults.push({word: comparedWord, commonChars: commonChars, matchingScore: commonChars.length});
    }

    //const passwordWithHighestScore = mockPasswords.find(p => p.score === Math.max(...mockPasswords.map(p => p.score))).value;

  }

  return (
    <div>
      <div className='password-add'>
        <input type="text" placeholder='Add password' onInput={handleAddPasswordInput} />
        <button onClick={() => handleAddPassword(password)}>Add password</button>
      </div>
      <div>
        <DropDownList options={passwordsValues} onOptionChange={handleCurrentPasswordValueChange} />
        <DropDownList options={scores} onOptionChange={handleCurrentPasswordScoreChange}/>
      </div>
      <button onClick={handleCrack}>Start Hacking!</button>
    </div>
  );
}

export default CrackerController