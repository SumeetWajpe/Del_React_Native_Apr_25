import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(100); // state hook - returns an array (stateVar,setStateVar) - initially set to 100
  const [age, setAge] = useState(18);
  return (
    <div>
      <strong>Counter : {count}</strong>
      <button onClick={() => setCount(count + 10)}>++</button>
      <hr />
      <strong>Age : {age}</strong>
      <button onClick={() => setAge(age + 1)}>++</button>
    </div>
  );
};

export default Counter;
