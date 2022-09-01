import React from 'react'
import { useEffect } from 'react';

function PasswordList(props) {
  const { items, handleRemovePassword } = props;

  useEffect(() => {
    console.log(items);
  });

  return (
    <div>
      <ul>
        {items.map(item =>
          <li>
            <h3>{item}</h3>
            <button onClick={() => handleRemovePassword(item)}>X</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PasswordList