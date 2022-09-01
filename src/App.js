import { useEffect, useState } from 'react';
import './App.css';
import CrackerController from './components/CrackerController/CrackerController';
import Header from './components/Header/Header';
import PasswordList from './components/PasswordList/PasswordList';

const APP_VERSION = '1.0.0';

function App() {
  const initPasswords = [
    {value: 'Pass1', score: 0},
    {value: 'Pass2', score: 0},
    {value: 'Pass3', score: 0},
  ];

  const [passwords, setPasswords] = useState(initPasswords);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordScore, setCurrentPasswordScore] = useState(0);

  const handleRemovePassword = (password) => setPasswords(passwords.filter(p => p.value !== password));
  const handleAddPassword = (password) => setPasswords([...passwords, {value: password, score: 0}]);
  const handleCurrentPasswordValueChange = (password) => setCurrentPassword(password);
  const handleCurrentPasswordScoreChange = (score) => {
    setCurrentPasswordScore(score);
    passwords[passwords.findIndex(p => p.value === currentPassword)].score = score;
  }
  const handleCrack = () => undefined;

  return (
    <div className="App">
      <Header version={APP_VERSION} />
      <PasswordList items={passwords} handleRemovePassword={handleRemovePassword} />
      <CrackerController 
        passwords={passwords}
        handleAddPassword={handleAddPassword}
        handleCurrentPasswordValueChange={handleCurrentPasswordValueChange}
        handleCurrentPasswordScoreChange={handleCurrentPasswordScoreChange}
        handleCrack={handleCrack}/>
    </div>
  );
}

export default App;
