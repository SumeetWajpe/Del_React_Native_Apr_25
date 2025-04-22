import React, { useState } from "react";

const Counter = () => {
  const [mystate, setMyState] = useState({ count: 100, age: 18 }); // state hook - returns an array (stateVar,setStateVar) - initially set to 100
  return (
    <div>
      <strong>Counter : {mystate.count}</strong>
      <button
        onClick={() => setMyState({ ...mystate, count: mystate.count + 10 })}
      >
        ++
      </button>
      <hr />
      <strong>Age : {mystate.age}</strong>
      <button onClick={() => setMyState({ ...mystate, age: mystate.age + 1 })}>
        ++
      </button>
    </div>
  );
};

export default Counter;
