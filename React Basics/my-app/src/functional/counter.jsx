import React, { useState } from "react";

const Counter = () => {
  const [count] = useState(100); // state hook - returns an array (stateVar,setStateVar) - initially set to 100
  return (
    <div>
      <strong>Counter : {count}</strong>
    </div>
  );
};

export default Counter;
