import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PasswordList from './components/PasswordList/PasswordList';

const APP_VERSION = '1.0.0';

function App() {
  const [passwords, setPasswords] = useState(['pass1', 'pass2', 'pass3']);

  const handleRemovePassword = (password) => setPasswords(passwords.filter(p => p !== password));

  return (
    <div className="App">
      <Header version={APP_VERSION} />
      <PasswordList items={passwords} handleRemovePassword={handleRemovePassword} />
    </div>
  );
}

export default App;
