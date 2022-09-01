import React from 'react'
import { useEffect } from 'react';

function PasswordList(props) {
  const { items, handleRemovePassword } = props;

  useEffect(() => {
    //console.log(items);
  });

  return (
    <div>
      <ul>
        {items.map((item, index) =>
          <li key={index}>
            <h3>{item.value}: {item.score}</h3>
            <button onClick={() => handleRemovePassword(item.value)}>X</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PasswordList