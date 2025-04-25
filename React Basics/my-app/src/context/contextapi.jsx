import React, { useContext, useState } from "react";
const MyCounterContext = React.createContext(0);
export const GrandParent = () => {
  const [count, setCount] = useState(1000);
  return (
    <MyCounterContext.Provider value={count}>
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
    </>
  );
};

const Child = () => {
  const ctx = useContext(MyCounterContext);
  return (
    <>
      <h1>Child</h1>
      <p> Count : {ctx}</p>
    </>
  );
};
