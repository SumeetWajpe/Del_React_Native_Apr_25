import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(100); // state hook - returns an array (stateVar,setStateVar) - initially set to 100
  return (
    <div>
      <strong>Counter : {count}</strong>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
};

export default Counter;
