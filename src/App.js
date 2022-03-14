import React, { useState } from 'react';
import Theme from './Theme'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className="increment" onClick={() => increment()}>
        Increment Count
      </button>
      <button className="decrement" onClick={() => decrement()}>
        Decrement Count
      </button>
      <Theme value="test"></Theme>
    </div>
  );
}

export default App;
