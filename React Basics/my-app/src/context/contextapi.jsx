import React, { useContext, useState } from "react";
const MyCounterContext = React.createContext();

const MyCounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = value => {
    setCount(count + value);
  };
  return (
    <MyCounterContext.Provider value={{ count, incrementCount }}>
      {children}
    </MyCounterContext.Provider>
  );
};

export const GrandParent = () => {
  const [count, setCount] = useState(100);
  return (
    <MyCounterProvider>
      <Parent />
    </MyCounterProvider>
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
