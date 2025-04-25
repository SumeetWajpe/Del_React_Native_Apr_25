import React, { useContext, useState } from "react";
const MyCounterContext = React.createContext(0);
export const GrandParent = () => {
  const [count, setCount] = useState(100);
  return (
    <MyCounterContext.Provider
      value={{
        count,
        incrementCount: function (incrementBy) {
          setCount(count + incrementBy);
          console.log("Count is incremented");
        },
      }}
    >
      <h1>Grandparent</h1>
      <Parent />
    </MyCounterContext.Provider>
  );
};
const Parent = () => {
  return (
    <>
      <h1>Parent</h1>
      <Child />
      <AnotherChild />
    </>
  );
};

const Child = () => {
  const ctx = useContext(MyCounterContext);
  return (
    <>
      <h1>Child</h1>
      <p> Count : {ctx.count}</p>
      <button onClick={() => ctx.incrementCount(10)}>Increment</button>
    </>
  );
};

const AnotherChild = () => {
  const ctx = useContext(MyCounterContext);
  return (
    <>
      <h1>Another Child</h1>
      <p> Count : {ctx.count}</p>
    </>
  );
};
